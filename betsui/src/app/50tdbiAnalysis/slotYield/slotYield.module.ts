import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

import {DynamicComponent} from "./dynamic.component";

import {SlotYieldComponent} from "./slotYield.component";
import {SlotYieldRouting} from "./slotYield.routing";
import {DatatableComponent} from "./datatable.component";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";

@NgModule({
    imports: [
        CommonModule,
        SlotYieldRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        SmartadminFormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SlotYieldComponent,DynamicComponent,DatatableComponent]
})
export class SlotYieldModule {
}
