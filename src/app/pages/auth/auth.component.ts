import { Component } from '@angular/core';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-auth',
  imports: [AuthorizationComponent, RegistrationComponent, MatTabsModule], //сюда нужно вписывать названия классов из дочерних компонентов; импорт будет прописываться автоматически
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
