import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import {SpinnerComponent} from "../../shared/spinner/spinner.component";

import {SingleDutComponent} from "./singledut.component";
import {SingleDutRouting} from "./singledut.routing";

@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        SingleDutRouting,
        SmartadminModule,
    ],
    declarations: [SingleDutComponent, SpinnerComponent]
})
export class SingleDutModule {
}
