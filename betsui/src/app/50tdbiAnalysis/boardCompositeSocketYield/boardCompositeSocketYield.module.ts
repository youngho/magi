import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import {BoardCompositeSocketYieldComponent} from "./boardCompositeSocketYield.component";
import {BoardCompositeSocketYieldRouting} from "./boardCompositeSocketYield.routing";

@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BoardCompositeSocketYieldRouting,
        SmartadminModule,
    ],
    declarations: [BoardCompositeSocketYieldComponent]
})
export class BoardCompositeSocketYieldModule {
}