import { Wish } from '@/models/Wish';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { WishApiService } from './wish-api.service';
import user from 'node_modules/lucide-angular/icons/user';
import { tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishStateService {
  readonly #wishes = signal<Wish[]>([]);
  readonly wishes = this.#wishes.asReadonly();

  setWishes(wishes: Wish[]) {
    this.#wishes.set(wishes);
  }

  addWish(newWish: Wish) {
    this.#wishes.update(list => [...list, newWish]);
  }
}
