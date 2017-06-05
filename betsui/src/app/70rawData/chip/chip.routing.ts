import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {ChipComponent} from "./chip.component";
/**
 * BETS-UI-0701
 * Test RAW Data
 * Test 공정에서 발생한 RAW Data를 조회한다
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: ChipComponent
}];

export const ChipRouting = RouterModule.forChild(moduleRoutes);

