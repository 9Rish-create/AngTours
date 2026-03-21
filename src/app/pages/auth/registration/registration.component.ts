import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registration',
  imports: [NgClass, FormsModule, MatButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  standalone: true
})
export class RegistrationComponent { 
  login = "";
  password = "";
  passwordRepeat = "";
  email = "";

  onAuth(ev: Event): void {
    if (this.login) {
      localStorage.setItem('user', this.login)
    }
  }
}
