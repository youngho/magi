import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {NgBinComponent} from "./ngbin.component";
import {NgBinRouting} from "./ngbin.routing";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        NgBinRouting,
        SmartadminModule,
        SmartadminInputModule,
    ],
    declarations: [NgBinComponent]
})
export class NgBinModule {
}
