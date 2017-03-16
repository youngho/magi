import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [

    {
        path: 'progrev',
        loadChildren: 'app/80history/testProgramRevision/testProgramRevision.module#TestProgramRevisionModule',
        data: {pageTitle: 'Test Program Revision'}
    },
    {
        path: 'mesTrackInOut',
        loadChildren: 'app/80history/mesTrackInOut/mesTrackInOut.module#MesTrackInOutModule',
        data: {pageTitle: 'MES track in/out'}
    },
    {
        path: 'userUsage',
        loadChildren: 'app/80history/userUsage/userUsage.module#UserUsageModule',
        data: {pageTitle: 'UserUsage'}
    },
    {
        path: 'lcRevision',
        loadChildren: 'app/80history/lcRevision/lcRevision.module#LcRevisionModule',
        data: {pageTitle: 'Firmware revision'}
    }
];

export const routing = RouterModule.forChild(routes);
