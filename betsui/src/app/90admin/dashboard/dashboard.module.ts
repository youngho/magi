import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRouting} from "./dashboard.routing";

// import "d3";
// import "nvd3";
import {nvD3} from "ng2-nvd3";
import {FlotChartModule} from "../../shared/graphs/flot-chart/flot-chart.module";
import {WjChartModule} from "wijmo/wijmo.angular2.chart";
import {WjInputModule} from "wijmo/wijmo.angular2.input";
import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcCore from 'wijmo/wijmo';
import {DygraphModule} from "../../shared/graphs/dygraph/dygraph.module";
import {DashboardChartDetail} from "./dashboardChartDetail";

@NgModule({
    imports: [
        CommonModule,
        DashboardRouting,
        SmartadminModule,
        DygraphModule,
        // BETS ADDED
        FlotChartModule, WjChartModule, WjInputModule,
    ],
    exports: [nvD3],
    declarations: [DashboardComponent, nvD3,DashboardChartDetail ]
})
export class DashboardModule {
}
