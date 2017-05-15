import {Routes, RouterModule} from "@angular/router";
import {TdbiComponent} from "./tdbi.component";
/**
 * BETS-UI-0702
 * TDBI RAW Data
 * TDBI 공정에서 발생한 RAW Data를 조회한다
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: TdbiComponent
}];

export const TdbiRouting = RouterModule.forChild(moduleRoutes);

