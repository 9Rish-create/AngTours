import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-authorization',
  imports: [NgClass, FormsModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent {
  login = "";
  password = "";
  saveInStore = false;

  onAuth(ev: Event): void {
    if (this.saveInStore) {
      localStorage.setItem('user', this.login);
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
