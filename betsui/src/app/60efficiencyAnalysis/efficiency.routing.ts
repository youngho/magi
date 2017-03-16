import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [
    {
        path: 'effic',
        loadChildren: 'app/60efficiencyAnalysis/testEfficiency/testEfficiency.module#TestEfficiencyModule',
        data: {pageTitle: 'Test efficiency'}
    },
    {
        path: 'testTime',
        loadChildren: 'app/60efficiencyAnalysis/testTime/testTime.module#TestTimeModule',
        data: {pageTitle: 'Test time'}
    }
];

export const routing = RouterModule.forChild(routes);
