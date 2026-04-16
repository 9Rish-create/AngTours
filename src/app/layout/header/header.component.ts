import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DatePipe, NgIf } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [NgIf, DatePipe, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {
      route: 'auth',
      title: 'Авторизация'
    }
  ]

  date = new Date();

  userLogin: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const user = this.userService.getUserFromStorage();
    this.userLogin = user?.login || '';

    setInterval(() => {
      this.date = new Date();
    }, 1000);

  }
}
