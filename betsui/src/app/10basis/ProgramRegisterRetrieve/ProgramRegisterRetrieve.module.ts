import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

import {ExpenceCellCmp, ProgramRegisterRetrieveComponent} from "./ProgramRegisterRetrieve.component";
import {ProgramRegisterRetrieveRouting} from "./ProgramRegisterRetrieve.routing";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";
import {WjCoreModule} from "wijmo/wijmo.angular2.core";
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import {ProgramRegisterViewComponent} from "./ProgramRegisterView.component"
import {IncludesModule} from "../../shared/includes/Includes.module";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : ProgramRegisterRetrieve.module.ts
 * 2. Discription   : 기본 테스트 프로그램 정보를 조회 수정한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjCoreModule, WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        ProgramRegisterRetrieveRouting,
        SmartadminModule,
        SmartadminInputModule,
        // BETS ADDED
        SmartadminFormsModule,
        FormsModule,
        ReactiveFormsModule,
        IncludesModule,
        LoadingModule
    ],
    declarations: [ProgramRegisterRetrieveComponent, ExpenceCellCmp]
})
export class ProgramRegisterRetrieveModule {
}
