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
        // path: '', redirectTo: 'dashboard/analytics', pathMatch: 'full'
         path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'
          // otherwise redirect to home
          // path: '**', redirectTo: ''
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
      },
      {
        path: 'dutmap',
        loadChildren: 'app/30dutmap/dutmap.module#DutmapModule',
        data: {pageTitle: 'DUT Map'}
      },
      {
        path: 'sblanal',
        loadChildren: 'app/40sblAnalysis/sblAnalysis.module#SblAnalysisModule',
        data: {pageTitle: 'Basis'}
      },
      {
        path: 'tdbianal',
        loadChildren: 'app/50tdbiAnalysis/tdbiAnalysis.module#TdbiAnalysisModule',
        data: {pageTitle: 'TDBI Analisys'}
      } ,
     {
        path: 'efficiencyAnalysis',
        loadChildren: 'app/60efficiencyAnalysis/efficiency.module#EfficiencyModule',
        data: {pageTitle: 'Efficiency'}
      },
      {
        path: 'rawData',
        loadChildren: 'app/70rawData/RawData.module#RawDataModule',
        data: {pageTitle: 'RAW Data'}
      },
      {
        path: 'history',
        loadChildren: 'app/80history/history.module#HistoryModule',
        data: {pageTitle: 'History'}
      },
      {
        path: 'admin',
        loadChildren: 'app/90admin/Admin.module#AdminModule',
        data: {pageTitle: 'Admin'}
      },
      {
        path: 'forms',
        loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',
        data: {pageTitle: 'Forms'}
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
