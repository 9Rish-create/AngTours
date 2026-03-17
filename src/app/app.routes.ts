import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    {path: 'auth', component: AuthComponent} //здесь хранится связь между запросом в адресной строке и компонентом, который должен отобразиться!
];
