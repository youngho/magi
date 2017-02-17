import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {retrievelastTableRouting} from "./retrievelasttable.routing";
import {retrieveLastTableComponent} from "./retrievelasttable.component";

@NgModule({
    imports: [
        CommonModule,
        retrievelastTableRouting,
        SmartadminModule,

        // BETS ADDED
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [retrieveLastTableComponent]
})
export class retrieveLastTableModule {
}
