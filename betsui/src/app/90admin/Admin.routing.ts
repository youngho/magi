import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [
    {
        path: 'register',
        loadChildren: 'app/90admin/register/Register.module#RegisterModule',
        data: {pageTitle: 'BETS User Register'}
    }
];

export const routing = RouterModule.forChild(routes);
