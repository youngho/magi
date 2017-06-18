import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {UserUsageComponent} from "./userUsage.component";
import {UserUsageRouting} from "./userUsage.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : userUsage.module.ts
 * 2. Discription   : 사용자 이력화면이다. 사용자 이력정보는 각 화면이 Init되는 시점에 UserUsage 서비스를 호출하여 자신의 화면 아이디를 시간과 함께 저장한다. 이렇게 저장된 내역을 조회하는 화면이다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0803 : Test Program Revision
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        UserUsageRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [UserUsageComponent]
})
export class UserUsageModule {
}
