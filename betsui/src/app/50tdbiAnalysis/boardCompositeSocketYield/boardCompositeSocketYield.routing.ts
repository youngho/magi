import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {BoardCompositeSocketYieldComponent} from "./boardCompositeSocketYield.component";
/**
 * 1. File name     : boardCompositeSocketYield.routing.ts
 * 2. Discription   : 특정 보드의 기간동안 소켓의 수율을 보여준다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: BoardCompositeSocketYieldComponent
}];

export const BoardCompositeSocketYieldRouting = RouterModule.forChild(moduleRoutes);

