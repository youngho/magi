import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {TdbiDcComponent} from "./tdbiDc.component";
import {TdbiDcRouting} from "./tdbiDc.routing";

@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        TdbiDcRouting,
        SmartadminModule,
    ],
    declarations: [TdbiDcComponent]
})
export class TdbiDcModule {
}
