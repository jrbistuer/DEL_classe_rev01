import { Injectable } from '@angular/core';
import { User } from '../model/user_model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() { }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
