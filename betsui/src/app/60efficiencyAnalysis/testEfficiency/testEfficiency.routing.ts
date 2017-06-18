import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {TestEfficiencyComponent} from "./testEfficiency.component";

/**
 * 1. File name     : testEfficiency.routing.ts
 * 2. Discription   : Test Efficiency 조회 기능 각 시간을 산출하는 로직이 중요하다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0601 : Test Efficiency
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: TestEfficiencyComponent
}];

export const TestEfficiencyRouting = RouterModule.forChild(moduleRoutes);

