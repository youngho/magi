import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

import {SettingsComponent} from "./settings.component";
import {SettingsRouting} from "./settings.routing";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";

import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {LoadingModule} from "ngx-loading";

/**
 * 1. File name     : settings.module.ts
 * 2. Discription   : 사용자 설정화면
 * 3. writer        : yhkim     2017.06.18
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0902 : Setting
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        SettingsRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        SmartadminFormsModule,
        FormsModule,
        ReactiveFormsModule,
        LoadingModule
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule {
}
