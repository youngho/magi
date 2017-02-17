import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {lastTableRouting} from './lasttable.routing';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {LastTableComponent} from "./lasttable.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        lastTableRouting,
        SmartadminModule,

        // BETS ADDED
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [LastTableComponent]
})
export class LastTableModule {
}
