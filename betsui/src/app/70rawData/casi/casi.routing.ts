import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {CasiComponent} from "./casi.component";
/**
 * 1. File name     : casi.component.ts
 * 2. Discription   : Test 공정에서 발생한 RAW Data를 조회한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0701 : Test RAW Data
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: CasiComponent
}];

export const CasiRouting = RouterModule.forChild(moduleRoutes);

