import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

import {TdbiBoardTypeRegisterComponent} from "./TdbiBoardTypeRegister.component";
import {TdbiBoardTypeRegisterRouting} from "./TdbiBoardTypeRegister.routing";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";

@NgModule({
    imports: [
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
