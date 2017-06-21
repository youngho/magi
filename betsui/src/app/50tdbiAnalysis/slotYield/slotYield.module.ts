import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjCoreModule} from "wijmo/wijmo.angular2.core";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {ExpenceCellCmp, SlotYieldComponent} from "./slotYield.component";
import {SlotYieldRouting} from "./slotYield.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : slotYield.module.ts
 * 2. Discription   : BURN_IN_BOARD_MAP 테이블에서 Slot 별로 BIN의 결과를 보여준다
 *                    BI_SOCKET_NUMBER 컬럼에 들어 있는 BIN 문자열을 파싱하여 BIN별로 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0504 : Slot Yield
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjCoreModule, WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        SlotYieldRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [SlotYieldComponent, ExpenceCellCmp]
})
export class SlotYieldModule {
}
