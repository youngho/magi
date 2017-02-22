
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'yield',
    loadChildren: 'app/40sblanal/yield/yield.module#YieldModule',
    data: {pageTitle: 'Yield abnormal'}
  },
  { path: 'subbin',
    loadChildren: 'app/40sblanal/subbin/subbin.module#SubbinModule',
    data: {pageTitle: 'Sub bin abnormal'}
  },
  { path: 'testlot',
    loadChildren: 'app/40sblanal/testlot/testlot.module#TestlotModule',
    data: {pageTitle: 'Test lot cancel'}
  }
];

export const routing = RouterModule.forChild(routes);
