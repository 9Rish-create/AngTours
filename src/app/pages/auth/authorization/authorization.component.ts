import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserService } from '../../../services/user.service';
import { API } from '../../../shared/api'
import { userApiService } from '../../../services/api/user-api.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  imports: [NgClass, FormsModule, MatButtonModule, MatCheckboxModule, MatSnackBarModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent  implements OnInit, OnDestroy{
  private userService = inject(UserService);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router)
  login = "";
  password = "";
  saveInStore = false;
  userApiService = inject(userApiService);


  

  constructor (private userService2: UserService){
        console.log('constr init')
  }
  // вызывается один раз, сразу после того, как компонент был создан и вставлен в DOM
  ngOnInit() {
    console.log('auth init')
  }

  //метод вызывается перед уничтожением компонента.
  ngOnDestroy() {
    console.log('auth destroy')
  }



  onAuth(ev: Event): void {

      this.userApiService.auth({login: this.login, password: this.password}).subscribe((res:any) => {
          if (this.saveInStore) {
          
            this.userService.saveUserInStore({login: this.login})
          } else {
            this.userService.setUser({login: this.login});
            } this._snackBar.open('Успех!', 'OK', {duration: 3000});
            this.router.navigate(["/"])
        }, 
         //дз сообщение об ошибке
        (error) => { this._snackBar.open('Ошибка авторизации', 'NOT OK (500)', {duration: 3000})
          
        });
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
  
