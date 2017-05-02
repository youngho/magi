import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRouting} from "./dashboard.routing";



import {WjChartModule} from "wijmo/wijmo.angular2.chart";
import {WjInputModule} from "wijmo/wijmo.angular2.input";
import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcCore from 'wijmo/wijmo';
import {DashboardChartDetail} from "./dashboardChartDetail";

@NgModule({
    imports: [
        CommonModule,
        DashboardRouting,
        SmartadminModule,
        // BETS ADDED
        WjChartModule, WjInputModule,
    ],

    declarations: [DashboardComponent,DashboardChartDetail ]
})
export class DashboardModule {
}
