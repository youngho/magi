import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

import {DynamicComponent} from "./dynamic.component";

import {SubBinAbnormalComponent} from "./subBinAbnormal.component";
import {SubBinAbnormalRouting} from "./subBinAbnormal.routing";
import {DatatableComponent} from "./datatable.component";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

@NgModule({
    imports: [
        CommonModule,
        SubBinAbnormalRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SubBinAbnormalComponent,DynamicComponent,DatatableComponent]
})
export class SubBinAbnormalModule {
}
