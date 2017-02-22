
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'singledut',
    loadChildren: 'app/20dutmap/singledut/singledut.module#SingleDutModule',
    data: {pageTitle: 'Single DUT map'}
  },
  { path: 'compodut',
    loadChildren: 'app/20dutmap/compodut/compodut.module#CompoDutModule',
    data: {pageTitle: 'Composite DUT map'}
  }
];

export const routing = RouterModule.forChild(routes);
