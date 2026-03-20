import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';

export const routes: Routes = [
    {path: 'auth', component: AuthComponent,
    },
    {path: 'registration', component: RegistrationComponent} //здесь хранится связь между запросом в адресной строке и компонентом, который должен отобразиться!
];
