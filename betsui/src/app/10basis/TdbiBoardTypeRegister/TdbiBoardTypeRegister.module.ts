import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

import {TdbiBoardTypeRegisterComponent} from "./TdbiBoardTypeRegister.component";
import {TdbiBoardTypeRegisterRouting} from "./TdbiBoardTypeRegister.routing";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";

@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        TdbiBoardTypeRegisterRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        SmartadminFormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [TdbiBoardTypeRegisterComponent]
})
export class TdbiBoardTypeRegisterModule {
}
