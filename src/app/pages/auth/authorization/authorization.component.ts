import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-authorization',
  imports: [NgClass, FormsModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent {
  private userService = inject(UserService);
  login = "";
  password = "";
  saveInStore = false;
  

  constructor (private userService2: UserService){

  }

  onAuth(ev: Event): void {
    if (this.saveInStore) {
      
      this.userService.saveUserInStore({login:this.login})
    } else {
      this.userService.setUser({login: this.login});
    }
  }
  // ДЗ к 1 практике
  // onAuth(ev: Event) {
  //   const savedLogin = localStorage.getItem('user');

  //   if (this.login !== savedLogin) {
  //     alert('Неверный логин!');
  //     return;
  //   }
  //   alert('Успех!');
  // }
 }
