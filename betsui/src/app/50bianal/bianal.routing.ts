
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'datasum',
    loadChildren: 'app/50bianal/datasum/datasum.module#DatasumModule',
    data: {pageTitle: 'Data summary'}
  },
  { path: 'serialmap',
    loadChildren: 'app/50bianal/serialmap/serialmap.module#SerialmapModule',
    data: {pageTitle: 'Board serial map'}
  },
  { path: 'compomap',
    loadChildren: 'app/50bianal/compomap/compomap.module#CompomapModule',
    data: {pageTitle: 'Board composite map'}
  }
];

export const routing = RouterModule.forChild(routes);
