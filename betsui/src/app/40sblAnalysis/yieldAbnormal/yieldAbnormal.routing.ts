import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {YieldAbnormalComponent} from "./yieldAbnormal.component";

/**
 * 1. File name     : yieldAbnormal.routing.ts
 * 2. Discription   : Abnormal 목록을 조회힌다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0401 : Yield Abnormal
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: YieldAbnormalComponent
}];

export const YieldAbnormalRouting = RouterModule.forChild(moduleRoutes);

