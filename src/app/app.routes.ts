import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'spotify',
        loadComponent: ()=> import('./spotify/spotify.component'),
        children:[
            {
                path:'',
                title: 'spotify',
                loadComponent: () => import('@components/search-artist/search-artist.component')
            },
            {
                path:'artist/:name',
                title: 'spotify',
                loadComponent: () => import('@components/artist/artist.component')
            },
            {
                path:'add',
                title: 'spotify',
                loadComponent: () => import('@shared/formField/formField.component')
            }
        ]
    },
    {
        path:'',
        redirectTo: '/spotify',
        pathMatch: 'full'
    }
];
