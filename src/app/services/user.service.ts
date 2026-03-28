import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RegisterRequest } from './register.interface';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  private apiURL = 'http://localhost:4200/'

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

  register(data: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiURL}/register`, data);
  }

}
