import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {DutMapYieldComponent} from "./dutmapyield.component";
/**
 * 1. File name     : dutmapyield.routing.ts
 * 2. Discription   : BETS-UI-0303
 *                    DUT Map Yiled
 *                    BIN Selection 이 정해지지 않을 경우에는 PASS BIN의 비율을 보여준다
 *                    BIN Selection 에서 선택한 BIN의 비율을 보여준다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: DutMapYieldComponent
}];

export const DutMapYieldRouting = RouterModule.forChild(moduleRoutes);

