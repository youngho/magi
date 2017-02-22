
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'effic',
    loadChildren: 'app/60efficiencyAnaysis/effic/effic.module#EfficModule',
    data: {pageTitle: 'Test efficiency'}
  },
  { path: 'testTime',
    loadChildren: 'app/60efficiencyAnaysis/testTime/TestTime.module#TestTimeModule',
    data: {pageTitle: 'Test time'}
  }
];

export const routing = RouterModule.forChild(routes);
