import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

import {DynamicComponent} from "./dynamic.component";

import {DataSummaryComponent} from "./dataSummary.component";
import {DataSummaryRouting} from "./dataSummary.routing";
import {DatatableComponent} from "./datatable.component";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";

@NgModule({
    imports: [
        CommonModule,
        DataSummaryRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        SmartadminFormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [DataSummaryComponent,DynamicComponent,DatatableComponent]
})
export class DataSummaryModule {
}
