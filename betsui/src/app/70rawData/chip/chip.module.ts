import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {ChipComponent} from "./chip.component";
import {ChipRouting} from "./chip.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : chip.module.ts
 * 2. Discription   : CID 판별을 위해 만들어지는 파일들에 대한 조회 기능
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0703 : Chip RAW Data
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        ChipRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [ChipComponent]
})
export class ChipModule {
}
