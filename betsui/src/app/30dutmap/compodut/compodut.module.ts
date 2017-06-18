import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {CompoDutComponent} from "./compodut.component";
import {CompoDutRouting} from "./compodut.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : compodut.module.ts
 * 2. Discription   : BETS-UI-0302
 *                    Composite DUT Map
 *                    CASI_BIN 테이블의 DUT_MAIN_BIN 에 들어 있는 DUT의 정보를 BIN별로 분류하여 PASS BIN의 비율을 보여준다
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
        CompoDutRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [CompoDutComponent]
})
export class CompoDutModule {
}
