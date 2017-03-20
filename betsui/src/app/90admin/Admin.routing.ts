import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/90admin/dashboard/dashboard.module#DashboardModule',
        data: {pageTitle: 'BETS Dashboard'}
    },
    {
        path: 'register',
        loadChildren: 'app/90admin/register/register.module#RegisterModule',
        data: {pageTitle: 'BETS User Register'}
    },
    {
        path: 'settings',
        loadChildren: 'app/90admin/settings/settings.module#SettingsModule',
        data: {pageTitle: 'BETS Settings'}
    },
];

export const routing = RouterModule.forChild(routes);
