import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import {WjChartModule} from "wijmo/wijmo.angular2.chart";
import {WjChartAnimationModule} from "wijmo/wijmo.angular2.chart.animation";

import {TestEfficiencyComponent} from "./testEfficiency.component";
import {TestEfficiencyRouting} from "./testEfficiency.routing";

@NgModule({
    imports: [
        CommonModule,
        TestEfficiencyRouting,
        SmartadminModule, ReactiveFormsModule,
        // BETS ADDED
        FormsModule,
        WjInputModule, WjGridModule, WjGridFilterModule,
        WjChartModule, WjChartAnimationModule
    ],
    declarations: [TestEfficiencyComponent]
})
export class TestEfficiencyModule {
}
