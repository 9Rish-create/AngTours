import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-authorization',
  imports: [NgClass, FormsModule, MatButtonModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent {
  login = "";
  password = ""

  onRegistr(ev: Event) {
    const savedLogin = localStorage.getItem('user');

    if (this.login !== savedLogin) {
      alert('Неверный логин!');
      return;
    }
    alert('Успех!');
  }
 }
