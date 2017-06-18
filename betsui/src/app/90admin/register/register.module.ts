import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {RegisterComponent} from "./register.component";
import {RegisterRouting} from "./register.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : register.module.ts
 * 2. Discription   : 사용자 관리화면
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0901 : User Authorization
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        RegisterRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule {
}
