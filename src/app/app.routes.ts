import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'spotify',
        loadComponent: ()=> import('./spotify/spotify.component'),
        children:[

        ]
    },
    {
        path:'',
        redirectTo: '/spotify',
        pathMatch: 'full'
    }
];
