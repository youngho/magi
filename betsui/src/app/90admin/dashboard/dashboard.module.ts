import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRouting} from "./dashboard.routing";
// import "d3";
// import "nvd3";
import {nvD3} from "ng2-nvd3";
import {FlotChartModule} from "../../shared/graphs/flot-chart/flot-chart.module";

@NgModule({
    imports: [
        CommonModule,
        DashboardRouting,
        SmartadminModule,
        // BETS ADDED
        FlotChartModule
    ],
    exports: [nvD3],
    declarations: [DashboardComponent, nvD3]
})
export class DashboardModule {
}
