import { Wish } from '@/models/Wish';
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishApiService {
    private wishes: Wish[] = [];

    constructor() {}

    createWish(wish: Wish): Observable<Wish> {
      const newWish: Wish = {
        id: (this.wishes.length + 1).toString(),
        ...wish
      }
      this.wishes.push(newWish);
      return of(newWish).pipe(delay(500));
    }
}
