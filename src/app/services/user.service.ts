import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IRegisterUser } from '../models/user';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  private apiURL = 'http://localhost:3000';

 

  constructor(private http: HttpClient) { }



  saveUserInStore(user: any): void {

    this.setUser(user);
    localStorage.setItem('user', JSON.stringify(user)); //преобразовали объект в строку для сохранения объекта
  }

  getUser(): any{
    return this.user;
  }


  setUser(user: any): void{
    this.user = user;
  }

  register(data: IRegisterUser): Observable<any> {
    return this.http.post(`${this.apiURL}/register`, data);
  }
  getUserFromStorage(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

}



