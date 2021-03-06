
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
/*  { path: 'lot',
    loadChildren: 'app/70rawData/Lot/Lot.module#LotModule',
    data: {pageTitle: 'Lot'}
  },*/
  { path: 'chip',
    loadChildren: 'app/70rawData/chip/chip.module#ChipModule',
    data: {pageTitle: 'Chip'}
  },/*
  { path: 'log',
    loadChildren: 'app/70rawData/log/Log.module#LogModule',
    data: {pageTitle: 'Log'}
  },*/
  { path: 'casi',
    loadChildren: 'app/70rawData/casi/casi.module#CasiModule',
    data: {pageTitle: 'Test RAW Data'}
  },
  { path: 'tdbi',
    loadChildren: 'app/70rawData/tdbi/tdbi.module#TdbiModule',
    data: {pageTitle: 'TDBI RAW Data'}
  }/*,
  { path: 'BIBoard',
    loadChildren: 'app/70rawData/BIBoard/BIBoard.module#BIBoardModule',
    data: {pageTitle: 'BIBoard'}
  }*/
];

export const routing = RouterModule.forChild(routes);
