import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import {  LayoutComponent } from './layout/layout.component'
import { ToursComponent } from './pages/tours/tours.component';

export const routes: Routes = [
    
    {
        path: 'auth', 
        loadComponent: () => import('./pages/auth/auth.component').then(c => c.AuthComponent)

    },


    {
        path: '', 
        component: LayoutComponent,
        children: [ 
            {
                path: '',
                component: ToursComponent
            }

        ]
    },

    // {path: '',
    //    loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent) 
    // } динамическая загрузка
    
    //здесь хранится связь между запросом в адресной строке и компонентом, который должен отобразиться!
];
