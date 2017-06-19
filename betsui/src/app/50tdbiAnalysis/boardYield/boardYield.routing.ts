import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {BoardYieldComponent} from "./boardYield.component";
/**
 * 1. File name     : boardYield.routing.ts
 * 2. Discription   : Board 별 Yield 를 보여주는 화면
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0505 : Board Yield
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: BoardYieldComponent
}];

export const BoardYieldRouting = RouterModule.forChild(moduleRoutes);

