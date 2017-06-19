import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {BoardSerialMapComponent} from "./boardSerialMap.component";
import {BoardSerialMapRouting} from "./boardSerialMap.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : boardSerialMap.module.ts
 * 2. Discription   : Board Serial Map
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0502 : Board Serial Map
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        BoardSerialMapRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [BoardSerialMapComponent]
})
export class BoardSerialMapModule {
}
