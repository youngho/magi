import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {SingleDutComponent} from "./singledut.component";

/**
 * 1. File name     : ssingledut.routing.ts
 * 2. Discription   : CASI_BIN 테이블에서 SHOT 별로 DUT의 결과를 보여준다
 *                    DUT_MAIN_BIN 컬럼에 들어 있는 BIN 문자열을 파싱하여 표(DUT Map) 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0301 : Single DUT map
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: SingleDutComponent
}];

export const SingleDutRouting = RouterModule.forChild(moduleRoutes);

