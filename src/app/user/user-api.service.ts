import { User } from '@/models/User';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private users: User[] = [];

  constructor() {}

  createUser(user: User): Observable<User> {
    const newUser: User = {
      id: (this.users.length + 1).toString(),
      ...user
    }
    this.users.push(newUser);
    return of(newUser).pipe(delay(500));
  }

  findUser(user: User): Observable<User> {
    const foundUser: User = {
      id: "1",
      wishes: [
        { id: "1", title: "Birthday Wishlist", description: "My birthday wishes", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        { id: "2", title: "Christmas Wishlist", description: "My Christmas wishes", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
      ],
      ...user
    }

    return of(foundUser).pipe(delay(500));
  }
}
