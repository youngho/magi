import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {BoardCompositeMapComponent} from "./boardCompositeMap.component";
import {BoardCompositeMapRouting} from "./boardCompositeMap.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : boardCompositeMap.module.ts
 * 2. Discription   : Board Composite Map
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0503 : Board Composite Map
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BoardCompositeMapRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [BoardCompositeMapComponent]
})
export class BoardCompositeMapModule {
}
