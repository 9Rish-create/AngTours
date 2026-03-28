import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  userLogin: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const user = this.userService.getUserFromStorage();
    this.userLogin = user?.login || '';
  }
}
