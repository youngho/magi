import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {retrievelastTableRouting} from "./retrievelasttable.routing";
import {retrieveLastTableComponent} from "./retrievelasttable.component";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";
import {DatatablesRestDemoComponent} from "./datatables-rest-demo.component";
import {DynamicComponent} from "./dynamic.component";
import {AdministrationAppsDatatableComponent} from "./administration.apps.datatable.component";

@NgModule({
    imports: [
        CommonModule,
        retrievelastTableRouting,
        SmartadminModule,

        SmartadminDatatableModule,
        // BETS ADDED
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [retrieveLastTableComponent,DatatablesRestDemoComponent,DynamicComponent,AdministrationAppsDatatableComponent]
})
export class retrieveLastTableModule {
}
