import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {TdbiDcComponent} from "./tdbiDc.component";
/**
 * 1. File name     : tdbiDc.routing.ts
 * 2. Discription   : TDBI DC 조회
 * 3. writer        : yhkim     2017.06.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0506 : TDBI DC Retrieve
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: TdbiDcComponent
}];

export const TdbiDcRouting = RouterModule.forChild(moduleRoutes);

