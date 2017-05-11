
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'singledut',
    loadChildren: 'app/30dutmap/singledut/singledut.module#SingleDutModule',
    data: {pageTitle: 'Single DUT map'}
  },
  { path: 'dutmapyield',
    loadChildren: 'app/30dutmap/dutmapyield/dutmapyield.module#DutMapYieldModule',
    data: {pageTitle: 'DUT Map Yield'}
  },
  { path: 'compodut',
    loadChildren: 'app/30dutmap/compodut/compodut.module#CompoDutModule',
    data: {pageTitle: 'Composite DUT map'}
  }
];

export const routing = RouterModule.forChild(routes);
