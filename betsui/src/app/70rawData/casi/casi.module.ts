import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {CasiComponent} from "./casi.component";
import {CasiRouting} from "./casi.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : casi.component.ts
 * 2. Discription   : Test 공정에서 발생한 RAW Data를 조회한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0701 : Test RAW Data
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        CasiRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [CasiComponent]
})
export class CasiModule {
}
