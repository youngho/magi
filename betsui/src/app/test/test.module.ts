import {NgModule} from "@angular/core";
import {TestComponent} from "./test.component";
import {TestRouting} from "./test.routing";
import {TestFromComponent} from "./testFrom.component";
import {FlotChartModule} from "../shared/graphs/flot-chart/flot-chart.module";
import {WjChartModule} from "wijmo/wijmo.angular2.chart";
import {WjInputModule} from "wijmo/wijmo.angular2.input";
import {SmartadminModule} from "../shared/smartadmin.module";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        TestRouting,
        SmartadminModule,
        FlotChartModule, WjChartModule, WjInputModule
    ],
    declarations: [TestComponent,TestFromComponent],
    exports: [TestComponent]

})
export class TestModule {
}
