import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjCoreModule} from "wijmo/wijmo.angular2.core";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {BoardCompositeSocketYieldComponent, ExpenceCellCmp} from "./boardCompositeSocketYield.component";
import {BoardCompositeSocketYieldRouting} from "./boardCompositeSocketYield.routing";
/**
 * 1. File name     : boardCompositeSocketYield.module.ts
 * 2. Discription   : 특정 보드의 기간동안 소켓의 수율을 보여준다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjCoreModule, WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BoardCompositeSocketYieldRouting,
        SmartadminModule,
    ],
    declarations: [BoardCompositeSocketYieldComponent,ExpenceCellCmp]
})
export class BoardCompositeSocketYieldModule {
}
