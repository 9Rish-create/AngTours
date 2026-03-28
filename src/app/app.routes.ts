import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import {  LayoutComponent } from './layout/layout.component'

export const routes: Routes = [
    
    {
        path: 'auth', 
        loadComponent: () => import('./pages/auth/auth.component').then(c => c.AuthComponent)

    },

    {
        path: '', 
        component: LayoutComponent},

    // {path: '',
    //    loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent) 
    // } динамическая загрузка
    
    //здесь хранится связь между запросом в адресной строке и компонентом, который должен отобразиться!
];
