import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";

/**
 * 1. File name     : register.routing.ts
 * 2. Discription   : 사용자 관리화면
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0901 : User Authorization
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const mouduleRoutes: Routes = [{
    path: '',
    component: RegisterComponent
}];

export const RegisterRouting = RouterModule.forChild(mouduleRoutes);

