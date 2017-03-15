import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [
    {
        path: 'register',
        loadChildren: 'app/90admin/register/register.module#RegisterModule',
        data: {pageTitle: 'BETS User Register'}
    },
    {
        path: 'dashboard',
        loadChildren: 'app/90admin/dashboard/dashboard.module#DashboardModule',
        data: {pageTitle: 'BETS Dashboard'}
    },
];

export const routing = RouterModule.forChild(routes);
