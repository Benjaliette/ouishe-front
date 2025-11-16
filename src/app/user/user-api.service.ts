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
}
