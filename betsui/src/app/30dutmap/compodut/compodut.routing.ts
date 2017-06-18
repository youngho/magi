import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {CompoDutComponent} from "./compodut.component";

/**
 * 1. File name     : compodut.routing.ts
 * 2. Discription   : BETS-UI-0302
 *                    Composite DUT Map
 *                    CASI_BIN 테이블의 DUT_MAIN_BIN 에 들어 있는 DUT의 정보를 BIN별로 분류하여 PASS BIN의 비율을 보여준다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: CompoDutComponent
}];

export const CompoDutRouting = RouterModule.forChild(moduleRoutes);

