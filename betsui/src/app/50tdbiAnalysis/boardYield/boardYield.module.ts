import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjCoreModule} from "wijmo/wijmo.angular2.core";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {BoardYieldComponent, ExpenceCellCmp} from "./boardYield.component";
import {BoardYieldRouting} from "./boardYield.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     :boardYield.module.ts
 * 2. Discription   : Board 별 Yield 를 보여주는 화면
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0505 : Board Yield
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjCoreModule, WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        BoardYieldRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [BoardYieldComponent, ExpenceCellCmp]
})
export class boardYieldModule{
}
