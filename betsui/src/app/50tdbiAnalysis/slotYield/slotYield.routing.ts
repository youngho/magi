import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {SlotYieldComponent} from "./slotYield.component";
/**
 * 1. File name     : slotYield.routing.ts
 * 2. Discription   : BURN_IN_BOARD_MAP 테이블에서 Slot 별로 BIN의 결과를 보여준다
 *                    BI_SOCKET_NUMBER 컬럼에 들어 있는 BIN 문자열을 파싱하여 BIN별로 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0504 : Slot Yield
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: SlotYieldComponent
}];

export const SlotYieldRouting = RouterModule.forChild(moduleRoutes);

