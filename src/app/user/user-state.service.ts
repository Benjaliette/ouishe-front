import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { UserApiService } from './user-api.service';
import { User } from '@/models/User';
import { Wish } from '@/models/Wish';
import { catchError, of, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { WishStateService } from '../wish/wish-state.service';

const STORAGE_KEY = 'APP_USER_STATE';

interface UserState {
  currentUser: User | null;
  wishes: Wish[];
  status: 'idle' | 'loading' | 'error' | 'success';
  error: string | null;
}

const initialState: Readonly<UserState> = {
  currentUser: null,
  wishes: [],
  status: 'idle',
  error: null,
};

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  readonly #userService = inject(UserApiService);
  readonly #wishState = inject(WishStateService);
  private platformId = inject(PLATFORM_ID);

  private readonly INITIAL_STATE: UserState = initialState;
  readonly currentUser = computed(() => this.#state().currentUser);
  readonly currentUserWishes = computed(() => this.#state().wishes!);

  readonly #state = signal<UserState>(this.loadFromStorage());

  createUser(user: User) {
    this.#state.update(state => ({ ...state, status: 'loading', error: null }));

    return this.#userService.createUser(user).pipe(
      tap(newUser => {
        this.#state.update(state => ({
          ...state,
          currentUser: newUser,
          status: 'success',
          error: null,
        }));

        if (newUser.wishes) {
          this.#wishState.setWishes(newUser.wishes);
        }
      }),
      catchError(err => {
        this.#state.update(state => ({ ...state, status: 'error', error: err.message }));
        return of(null);
      })
    );
  }

  loadUser(user: User) {
    this.#state.update(state => ({ ...state, status: 'loading', error: null }));

    return this.#userService.findUser(user).pipe(
      tap(foundUser => {
        this.#state.update(state => ({
          ...state,
          currentUser: foundUser,
          wishes: foundUser.wishes || [],
          status: 'success',
          error: null,
        }));

        const serializedState = JSON.stringify(this.#state());
        localStorage.setItem(STORAGE_KEY, serializedState);
      }),
      catchError(err => {
        this.#state.update(state => ({ ...state, status: 'error', error: err.message }));
        return of(null);
      })
    );
  }

    private loadFromStorage(): UserState {
    if (!isPlatformBrowser(this.platformId)) {
      return this.INITIAL_STATE;
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    return this.INITIAL_STATE;
  }
}
