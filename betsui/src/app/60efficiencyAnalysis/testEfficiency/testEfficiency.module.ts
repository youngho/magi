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

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : testEfficiency.module.ts
 * 2. Discription   : Test Efficiency 조회 기능 각 시간을 산출하는 로직이 중요하다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0601 : Test Efficiency
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        CommonModule,
        TestEfficiencyRouting,
        SmartadminModule, ReactiveFormsModule,
        // BETS ADDED
        FormsModule,
        WjInputModule, WjGridModule, WjGridFilterModule,
        WjChartModule, WjChartAnimationModule,
        LoadingModule
    ],
    declarations: [TestEfficiencyComponent]
})
export class TestEfficiencyModule {
}
