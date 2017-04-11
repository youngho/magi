
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'lotyield',
    loadChildren: 'app/20yield/lotyield/lotyield.module#lotyieldModule',
    data: {pageTitle: 'Lot yield'}
  },
  { path: 'ngbin',
    loadChildren: 'app/20yield/ngbin/ngbin.module#NgBinModule',
    data: {pageTitle: 'NG bin'}
  }
];

export const routing = RouterModule.forChild(routes);
