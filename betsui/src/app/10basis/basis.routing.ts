
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'ProgramRegister',
    loadChildren: 'app/10basis/ProgramRegister/ProgramRegister.module#ProgramRegisterModule',
    data: {pageTitle: 'Program register'}
  }/*,
  { path: 'BinDescription',
    loadChildren: 'app/10basis/BinDescription/BinDescription.module#BinDescriptionModule',
    data: {pageTitle: 'Bin description'}
  }*/
];

export const routing = RouterModule.forChild(routes);
