import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: 'passchange',
        loadChildren: './passChange/passChange.module#PassChangeModule',
        data: {pageTitle: 'Password Change'}
    }
];

export const routing = RouterModule.forChild(routes);
