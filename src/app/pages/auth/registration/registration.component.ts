import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterRequest } from '../../../services/register.interface';
import { UserService } from '../../../services/user.service';

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

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  onAuth(ev: Event): void {

    ev.preventDefault() //на всякий случай

    //проверка на заполненные поля
    if (!this.login || !this.password || !this.passwordRepeat || !this.email) {
      this.snackBar.open('Заполните все поля', 'Закрыть', {
        duration: 3000
      });
      return;
    }

    //проверка на заполнение совпадение паролей
    if (this.password !== this.passwordRepeat) {
      this.snackBar.open('Пароли не совпадают', 'Закрыть', {
        duration: 3000
      });
      return;
    }

    
    const data: RegisterRequest = {
      email: this.email,
      password: this.password,
      confirmPassword: this.passwordRepeat
    };

    this.userService.register(data).subscribe({
      next: () => {
        this.snackBar.open('Успешная регистрация', 'Закрыть', {
          duration: 3000
        });
  
        //здесь сохранение пользователя в локальное хранилище
        this.userService.saveUserInStore(
          {login: this.login,
           email: this.email
          }
        )
      },

      error: (err) => {
        this.snackBar.open(
          err.error?.message || 'Ошибка регистрации',
          'Закрыть',
          { duration: 3000 }
        );
      }
    });
  }




    }

