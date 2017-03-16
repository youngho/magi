import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [
        {
            path: 'ProgramRegister',
            loadChildren: 'app/10basis/ProgramRegister/ProgramRegister.module#ProgramRegisterModule',
            data: {pageTitle: 'Program Register'}
        },
        {
            path: 'ProgramRegisterRetrieve',
            loadChildren: 'app/10basis/ProgramRegisterRetrieve/ProgramRegisterRetrieve.module#ProgramRegisterRetrieveModule',
            data: {pageTitle: 'Program Register Retrieve'}
        },
        {
            path: 'BinDescription',
            loadChildren: 'app/10basis/BinDescription/BinDescription.module#BinDescriptionModule',
            data: {pageTitle: 'Bin Description'}
        },
        {
            path: 'TdbiBoardTypeRegister',
            loadChildren: 'app/10basis/TdbiBoardTypeRegister/TdbiBoardTypeRegister.module#TdbiBoardTypeRegisterModule',
            data: {
                pageTitle: 'TDBI Board Type Register'
            }
        },
        {
            path: 'lcVersionRegister',
            loadChildren: 'app/10basis/lcVersionRegister/lcVersionRegister.module#LcVersionRegisterModule',
            data: {
                pageTitle: 'LC Version Register'
            }
        }
    ]
    ;

export const routing = RouterModule.forChild(routes);
