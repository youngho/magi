import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {TestLotCancelComponent} from "./testLotCancel.component";
import {TestLotCancelRouting} from "./testLotCancel.routing";

import {LoadingModule} from "ngx-loading";

/**
 * 1. File name     : testLotCancel.module.ts
 * 2. Discription   : CANCEL_BIN 테이블에서 조회한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0402 : Test Lot Cancel
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        TestLotCancelRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [TestLotCancelComponent]
})
export class TestLotCancelModule {
}
