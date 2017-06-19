import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {TdbiDcComponent} from "./tdbiDc.component";
import {TdbiDcRouting} from "./tdbiDc.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : tdbiDc.module.ts
 * 2. Discription   : TDBI DC 조회
 * 3. writer        : yhkim     2017.06.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0506 : TDBI DC Retrieve
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        TdbiDcRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [TdbiDcComponent]
})
export class TdbiDcModule {
}
