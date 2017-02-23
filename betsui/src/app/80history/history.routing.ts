
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
/*  { path: 'osversion',
    loadChildren: 'app/80history/osversion/TesterOSVersion.module#TesterOSVersionModule',
    data: {pageTitle: 'Tester OS version'}
  },
  { path: 'progrev',
    loadChildren: 'app/80history/progrev/TestProgramRevision.module#TestProgramRevisionModule',
    data: {pageTitle: 'Test program revision'}
  },
  { path: 'frimrev',
    loadChildren: 'app/80history/frimrev/FirmwareRevision.module#FirmwareRevisionModule',
    data: {pageTitle: 'Firmware revision'}
  },
  { path: 'mesinout',
    loadChildren: 'app/80history/mesinout/MESTrackInOut.module#MESTrackInOutModule',
    data: {pageTitle: 'MES track in/out'}
  },
  { path: 'user',
    loadChildren: 'app/80history/user/UserUsage.module#UserUsageModule',
    data: {pageTitle: 'UserUsage'}
  }*/
];

export const routing = RouterModule.forChild(routes);
