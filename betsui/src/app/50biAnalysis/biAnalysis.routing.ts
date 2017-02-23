
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'datasum',
    loadChildren: 'app/50biAnalysis/dataSummary/dataSummary.module#DataSummaryModule',
    data: {pageTitle: 'Data summary'}
  },
  { path: 'serialmap',
    loadChildren: 'app/50biAnalysis/boardSerialMap/boardSerialMap.module#BoardSerialMapModule',
    data: {pageTitle: 'Board serial map'}
  },
  { path: 'compomap',
    loadChildren: 'app/50biAnalysis/boardCompositeMap/boardCompositeMap.module#BoardCompositeMapModule',
    data: {pageTitle: 'Board composite map'}
  }
];

export const routing = RouterModule.forChild(routes);
