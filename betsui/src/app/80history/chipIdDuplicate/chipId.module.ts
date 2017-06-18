import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {ChipIdComponent} from "./chipId.component";
import {ChipIdRouting} from "./chipId.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : chipId.module.ts
 * 2. Discription   : CID 중복 목록을 조회한다
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0804 : CID Duplicate Retrieve
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        ChipIdRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [ChipIdComponent]
})
export class ChipIdModule {
}
