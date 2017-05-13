import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {TestEfficiencyComponent} from "./testEfficiency.component";
import {TestEfficiencyRouting} from "./testEfficiency.routing";

@NgModule({
    imports: [
        CommonModule,
        TestEfficiencyRouting,
        SmartadminModule,
        // BETS ADDED
        WjInputModule, WjGridModule, WjGridFilterModule,
    ],
    declarations: [TestEfficiencyComponent]
})
export class TestEfficiencyModule {
}
