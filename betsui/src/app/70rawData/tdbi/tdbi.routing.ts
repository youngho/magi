import {Routes, RouterModule} from "@angular/router";
import {TdbiComponent} from "./tdbi.component";
/**
 * 1. File name     : tdbi.routing.ts
 * 2. Discription   : TDBI 공정에서 발생한 RAW Data를 조회한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0702 : TDBI RAW Data
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: TdbiComponent
}];

export const TdbiRouting = RouterModule.forChild(moduleRoutes);

