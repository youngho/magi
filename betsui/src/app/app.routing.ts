/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {
        path: '', redirectTo: 'dashboard/analytics', pathMatch: 'full'
      },
      {
        path: 'basis',
        loadChildren: 'app/10basis/basis.module#BasisModule',
        data: {pageTitle: 'Basis'}
      },
      {
        path: 'yield',
        loadChildren: 'app/20yield/yield.module#YieldModule',
        data: {pageTitle: 'Yield'}
      }/*,
      {
        path: 'dutmap',
        loadChildren: 'app/30dutmap/dutmap.module#DutmapModule',
        data: {pageTitle: 'DUT Map'}
      },
      {
        path: 'sblanal',
        loadChildren: 'app/40sblanal/sblanal.module#SblanalModule',
        data: {pageTitle: 'Basis'}
      },
      {
        path: 'bianal',
        loadChildren: 'app/50bianal/bianal.module#BianalModule',
        data: {pageTitle: 'BI Anal'}
      },
      {
        path: 'efficiencyAnaysis',
        loadChildren: 'app/60efficiencyAnaysis/efficiency.module#EfficiencyModule',
        data: {pageTitle: 'Efficiency'}
      },
      {
        path: 'rawData',
        loadChildren: 'app/70rawData/RawData.module#RawDataModule',
        data: {pageTitle: 'RAW Data'}
      },
      {
        path: 'history',
        loadChildren: 'app/80history/History.module#HistoryModule',
        data: {pageTitle: 'History'}
      },
      {
        path: 'Admin',
        loadChildren: 'app/90admin/Admin.module#AdminModule',
        data: {pageTitle: 'Admin'}
      }*/,
      {
        path: 'opirus',
        loadChildren: 'app/+opirus/opirus.module#OpirusModule',
        data: {pageTitle: 'Opirus'}
      },
      {
        path: 'dashboard',
        loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
        data: {pageTitle: 'Dashboard'}
      },
      {
        path: 'forms',
        loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',
        data: {pageTitle: 'Forms'}
      },
      {
        path: 'graphs',
        loadChildren: 'app/+graphs/graphs-showcase.module#GraphsShowcaseModule',
        data: {pageTitle: 'Graphs'}
      },
      {
        path: 'tables',
        loadChildren: 'app/+tables/tables.module#TablesModule',
        data: {pageTitle: 'Tables'}
      },
      {
        path: 'ui',
        loadChildren: 'app/+ui-elements/ui-elements.module#UiElementsModule',
        data: {pageTitle: 'Ui'}
      },
    ]
  },

  {path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
