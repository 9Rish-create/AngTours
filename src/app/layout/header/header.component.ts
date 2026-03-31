import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent implements OnInit {

  userLogin: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const user = this.userService.getUserFromStorage();
    this.userLogin = user?.login || '';
  }
}
