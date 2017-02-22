import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

import {DynamicComponent} from "./dynamic.component";
import {DatatableComponent} from "./datatable.component";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

import {ProgramRegisterRetrieveComponent} from "./ProgramRegisterRetrieve.component";
import {ProgramRegisterRetrieveRouting} from "./ProgramRegisterRetrieve.routing";

@NgModule({
    imports: [
        CommonModule,
        ProgramRegisterRetrieveRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ProgramRegisterRetrieveComponent,DynamicComponent,DatatableComponent]
})
export class ProgramRegisterRetrieveModule {
}
