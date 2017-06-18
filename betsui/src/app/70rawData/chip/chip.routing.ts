import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {ChipComponent} from "./chip.component";
/**
 * 1. File name     : chip.routing.ts
 * 2. Discription   : CID 판별을 위해 만들어지는 파일들에 대한 조회 기능
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0703 : Chip RAW Data
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: ChipComponent
}];

export const ChipRouting = RouterModule.forChild(moduleRoutes);

