import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

import {DynamicComponent} from "./dynamic.component";

import {NgBinComponent} from "./ngbin.component";
import {NgBinRouting} from "./ngbin.routing";
import {DatatableComponent} from "./datatable.component";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";

@NgModule({
    imports: [
        CommonModule,
        NgBinRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [NgBinComponent,DynamicComponent,DatatableComponent]
})
export class NgBinModule {
}
