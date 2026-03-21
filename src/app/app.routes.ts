import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import {  LayoutComponent } from './layout/layout.component'

export const routes: Routes = [
    {path: '', component: LayoutComponent},
    {path: 'auth', component: AuthComponent,
    }
    //здесь хранится связь между запросом в адресной строке и компонентом, который должен отобразиться!
];
