import { computed, inject, Injectable, signal } from '@angular/core';
import { UserApiService } from './user-api.service';
import { User } from '@/models/User';
import { Wish } from '@/models/Wish';
import { catchError, of, tap } from 'rxjs';

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

  readonly #state = signal(initialState);
  readonly currentUser = computed(() => this.#state().currentUser);

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
      }),
      catchError(err => {
        this.#state.update(state => ({ ...state, status: 'error', error: err.message }));
        return of(null);
      })
    );
  }
}
