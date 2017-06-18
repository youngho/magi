import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {ChipIdComponent} from "./chipId.component";

/**
 * 1. File name     : chipId.routing.ts
 * 2. Discription   : CID 중복 목록을 조회한다
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0804 : CID Duplicate Retrieve
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: ChipIdComponent
}];

export const ChipIdRouting = RouterModule.forChild(moduleRoutes);

