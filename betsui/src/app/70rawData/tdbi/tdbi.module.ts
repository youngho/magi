import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {TdbiComponent} from "./tdbi.component";
import {TdbiRouting} from "./tdbi.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : tdbi.module.ts
 * 2. Discription   : TDBI 공정에서 발생한 RAW Data를 조회한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0702 : TDBI RAW Data
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        TdbiRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [TdbiComponent]
})
export class TdbiModule {
}
