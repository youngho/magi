
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
/*  { path: 'osversion',
    loadChildren: 'app/80history/testerOSVersion/testerOSVersion.module#TesterOSVersionModule',
    data: {pageTitle: 'Tester OS version'}
  },*/
  { path: 'progrev',
    loadChildren: 'app/80history/testProgramRevision/testProgramRevision.module#TestProgramRevisionModule',
    data: {pageTitle: 'Test Program Revision'}
  }/*,
  { path: 'frimrev',
    loadChildren: 'app/80history/firmwareRevision/firmwareRevision.module#FirmwareRevisionModule',
    data: {pageTitle: 'Firmware revision'}
  }*/,
  { path: 'mesTrackInOut',
    loadChildren: 'app/80history/mesTrackInOut/mesTrackInOut.module#MesTrackInOutModule',
    data: {pageTitle: 'MES track in/out'}
  },
  { path: 'userUsage',
    loadChildren: 'app/80history/userUsage/userUsage.module#UserUsageModule',
    data: {pageTitle: 'UserUsage'}
  }
];

export const routing = RouterModule.forChild(routes);
