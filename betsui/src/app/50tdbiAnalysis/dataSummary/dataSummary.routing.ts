import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {DataSummaryComponent} from "./dataSummary.component";
/**
 * 1. File name     : dataSummary.service.ts
 * 2. Discription   : TDBI Data Summary
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0501 : Data Summary
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: DataSummaryComponent
}];

export const DataSummaryRouting = RouterModule.forChild(moduleRoutes);

