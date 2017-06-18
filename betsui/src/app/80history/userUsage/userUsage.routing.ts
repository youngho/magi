import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {UserUsageComponent} from "./userUsage.component";

/**
 * 1. File name     : userUsage.routing.ts
 * 2. Discription   : 사용자 이력화면이다. 사용자 이력정보는 각 화면이 Init되는 시점에 UserUsage 서비스를 호출하여 자신의 화면 아이디를 시간과 함께 저장한다. 이렇게 저장된 내역을 조회하는 화면이다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0803 : Test Program Revision
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: UserUsageComponent
}];

export const UserUsageRouting = RouterModule.forChild(moduleRoutes);

