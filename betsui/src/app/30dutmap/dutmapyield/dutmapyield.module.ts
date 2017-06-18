import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {DutMapYieldComponent} from "./dutmapyield.component";
import {DutMapYieldRouting} from "./dutmapyield.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : dutmapyield.module.ts
 * 2. Discription   : BETS-UI-0303
 *                    DUT Map Yiled
 *                    BIN Selection 이 정해지지 않을 경우에는 PASS BIN의 비율을 보여준다
 *                    BIN Selection 에서 선택한 BIN의 비율을 보여준다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        FormsModule, ReactiveFormsModule,
        DutMapYieldRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [DutMapYieldComponent]
})
export class DutMapYieldModule {
}
