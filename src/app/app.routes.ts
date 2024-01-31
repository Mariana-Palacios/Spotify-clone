import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'spotify',
        loadComponent: ()=> import('./spotify/spotify.component'),
        children:[
            {
                path:'artist/:name',
                title: 'spotify',
                loadComponent: () => import('@components/artist/artist.component')
            }
        ]
    },
    {
        path:'',
        redirectTo: '/spotify',
        pathMatch: 'full'
    }
];
