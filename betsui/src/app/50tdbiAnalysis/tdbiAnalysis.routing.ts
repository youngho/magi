import {RouterModule, Routes} from "@angular/router";


export const routes: Routes = [
    {
        path: 'datasummary',
        loadChildren: 'app/50tdbiAnalysis/dataSummary/dataSummary.module#DataSummaryModule',
        data: {pageTitle: 'Data summary'}
    },
    {
        path: 'serialmap',
        loadChildren: 'app/50tdbiAnalysis/boardSerialMap/boardSerialMap.module#BoardSerialMapModule',
        data: {pageTitle: 'Board serial map'}
    },
    {
        path: 'compomap',
        loadChildren: 'app/50tdbiAnalysis/boardCompositeMap/boardCompositeMap.module#BoardCompositeMapModule',
        data: {pageTitle: 'Board composite map'}
    },
    {
        path: 'slotYield',
        loadChildren: 'app/50tdbiAnalysis/slotYield/slotYield.module#SlotYieldModule',
        data: {pageTitle: 'Slot Yield'}
    },
    {
        path: 'boardYield',
        loadChildren: 'app/50tdbiAnalysis/boardYield/boardYield.module#boardYieldModule',
        data: {pageTitle: 'Board Yield'}
    },
    {
        path: 'tdbiDc',
        loadChildren: 'app/50tdbiAnalysis/tdbidc/tdbiDc.module#TdbiDcModule',
        data: {pageTitle: 'TDBI DC'}
    }
];

export const routing = RouterModule.forChild(routes);
