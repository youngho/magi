import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import {BoardCompositeMapComponent} from "./boardCompositeMap.component";
import {BoardCompositeMapRouting} from "./boardCompositeMap.routing";

@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BoardCompositeMapRouting,
        SmartadminModule,
    ],
    declarations: [BoardCompositeMapComponent]
})
export class BoardCompositeMapModule {
}
