import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {YieldAbnormalComponent} from "./yieldAbnormal.component";
import {YieldAbnormalRouting} from "./yieldAbnormal.routing";

import {LoadingModule} from "ngx-loading";

/**
 * 1. File name     : yieldAbnormal.module.ts
 * 2. Discription   : Abnormal 목록을 조회힌다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0401 : Yield Abnormal
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        YieldAbnormalRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [YieldAbnormalComponent]
})
export class YieldAbnormalModule {
}
