import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUserInStore(user: any): void {
    localStorage.setItem('user', user);
  }
}
