import {Component, Input, AfterViewChecked, ViewChild} from "@angular/core";
import {DashboardService} from "./dashboard.service";
import * as wjcChart from 'wijmo/wijmo.chart';
/**
 * Created by cho007 on 2017-03-29.
 */
@Component({
    selector: 'DashboardChartDetail',
    templateUrl: 'dashboardChartDetail.html',
    providers: [DashboardService]
})
export class DashboardChartDetail implements AfterViewChecked {
    @Input() chartDataDetail;
    @ViewChild('chartDetail') chartDetail: wjcChart.FlexChart;

    ngAfterViewChecked(){
        this.chartDetail.beginUpdate();
        console.log("ngAfterViewChecked");
        this.chartDetail.endUpdate();
    }

}