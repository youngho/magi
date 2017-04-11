
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'yield',
    loadChildren: 'app/40sblAnalysis/yieldAbnormal/yieldAbnormal.module#YieldAbnormalModule',
    data: {pageTitle: 'Yield abnormal'}
  },
  { path: 'testlot',
    loadChildren: 'app/40sblAnalysis/testLotCancel/testLotCancel.module#TestLotCancelModule',
    data: {pageTitle: 'Test lot cancel'}
  }
];

export const routing = RouterModule.forChild(routes);
