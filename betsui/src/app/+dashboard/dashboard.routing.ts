import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';


export const routes: Routes = [

  {
    path: 'analytics',
    loadChildren:'./+analytics/analytics.module#AnalyticsModule',
     
  },
];

export const routing = RouterModule.forChild(routes);
