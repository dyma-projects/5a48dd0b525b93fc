import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject(null);

  constructor() {}

  addUser(newUser: string): void {
    let users: string[];
    if (this.users.value !== null) {
      users = this.users.value.slice();
      users.push(newUser);
    } else {
      users = [newUser];
    }

    this.users.next(users);
  }

}
