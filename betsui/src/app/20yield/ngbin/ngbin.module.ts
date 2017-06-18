import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {ExpenceCellCmp, NgBinComponent} from "./ngbin.component";
import {NgBinRouting} from "./ngbin.routing";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import {WjCoreModule} from "wijmo/wijmo.angular2.core";
import {LoadingModule} from "ngx-loading";

/**
 * BETS-UI-0202 : NG bin
 * NG_BIN 테이블의 TESTER_COUNTER의 숫자가 0,1,2,OP_BIN(9999) 로들어온다.(분류조건)
 * NG_BIN 테이블에 있는 NG_BIN(SUB_BIN)(1~999)의 값의 각 NG_BIN숫자별로 몇개씩 나왔는지 보여준다.
 */
@NgModule({
    imports: [
        WjCoreModule, WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        NgBinRouting,
        SmartadminModule,
        SmartadminInputModule,
        LoadingModule
    ],
    declarations: [NgBinComponent, ExpenceCellCmp]
})
export class NgBinModule {
}
