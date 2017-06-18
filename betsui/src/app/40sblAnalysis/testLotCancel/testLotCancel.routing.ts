import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {TestLotCancelComponent} from "./testLotCancel.component";

/**
 * 1. File name     : testLotCancel.routing.ts
 * 2. Discription   : CANCEL_BIN 테이블에서 조회한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0301 : Single DUT map
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: TestLotCancelComponent
}];

export const TestLotCancelRouting = RouterModule.forChild(moduleRoutes);

