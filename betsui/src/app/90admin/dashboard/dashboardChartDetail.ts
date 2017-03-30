import {
    Component, Input, AfterViewChecked, ViewChild, OnChanges, SimpleChange, AfterViewInit,
    OnDestroy
} from "@angular/core";
import {DashboardService} from "./dashboard.service";
import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcCore from 'wijmo/wijmo';
/**
 * Created by cho007 on 2017-03-29.
 */
@Component({
    selector: 'DashboardChartDetail',
    templateUrl: 'dashboardChartDetail.html',
    providers: [DashboardService]
})
export class DashboardChartDetail implements OnChanges,AfterViewInit, AfterViewChecked {
    @Input() chartDataDetail;
    @ViewChild('chartDetail') chartDetail: wjcChart.FlexChart;
    customTooltip: Function;
    itemFormatter: Function;
    private _nStudents = 200;
    private _nMaxPoints = 1600;

    constructor() {
        this.itemFormatter = this._itemFormatter.bind(this);
        this.customTooltip = this._customToolTip.bind(this);
    }

    private _itemFormatter(engine: wjcChart.IRenderEngine, hitTestInfo: wjcChart.HitTestInfo, defaultFormat: Function) {
        // debugger;
        if (hitTestInfo.chartElement == wjcChart.ChartElement.SeriesSymbol) {
            // var y = hitTestInfo.y;
            // var r = y >= 0 ? 255 : (255 * (1 + y)).toFixed();
            // var b = y < 0 ? 255 : (255 * (1 - y)).toFixed();
            // var g = ((1 - Math.abs(y)) * 255).toFixed();
            if(hitTestInfo.item.yield <= 99){
                engine.fill = 'rgb(255,0,0)';
                engine.stroke = 'rgb(255,0,0)';
            }else {
                engine.fill = 'rgb(0,255,0)';
                engine.stroke = 'rgb(0,255,0)';
            }

            defaultFormat();
        }
    }

    private _customToolTip(ht: wjcChart.HitTestInfo) {
        // debugger;
        return 'lotId=<b>' + ht.item.lotId + '</b><br/> ' +
            'processCode=<b>' + ht.item.processCode + '</b><br/>' +
            'quantity=<b>' + ht.item.quantity + '</b><br/>' +
            'yield=<b>' + ht.item.yield + '</b><br/>' +
            'bin8=<b>' + ht.item.bin8 + '</b>';
    }

    series1 = new wjcChart.Series();
    series2 = new wjcChart.Series();
    series3 = new wjcChart.Series();
    series4 = new wjcChart.Series();
    // series5 = new wjcChart.Series();
    // series6 = new wjcChart.Series();
    // series7 = new wjcChart.Series();
    // series8 = new wjcChart.Series();

    ngAfterViewInit() {
        this.chartDetail.series.push(this.series1);
        // this.chartDetail.series.push(this.series2);
        // this.chartDetail.series.push(this.series3);
        // this.chartDetail.series.push(this.series4);
    }

    ngAfterViewChecked() {
        this.chartDetail.beginUpdate();
        this.chartDetail.endUpdate();
    }

    private _findMean(data: any[]) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum += data[i].yield;
        }
        return sum / data.length;
    }

    private _findStdDev(data: any[], mean: number) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            var d = data[i].yield - mean;
            sum += d * d;
        }
        return Math.sqrt(sum / data.length);
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        var chart = this.chartDetail;
        var data = this.chartDataDetail;
        if (!chart) {
            return;
        }

        // calculate statistics
        var mean = this._findMean(data);//평균
        var stdDev = this._findStdDev(data, mean);//표준편차

        chart.beginUpdate();


        let y = mean + -1 * stdDev;
        let sdata = [{x: 0, y: y}, {x: this.chartDataDetail.length - 1, y: y}];

        sdata = [{x: 0, y: 99}, {x: this.chartDataDetail.length - 1, y: 99}];
        this.series1.itemsSource = sdata;
        this.series1.bindingX = 'x';
        this.series1.binding = 'y';
        this.series1.chartType = wjcChart.ChartType.Line;
        this.series1.style = {stroke: 'rgba(255,0,0,0.5)', strokeWidth: 2};
        this.series1.style.strokeDasharray = '2,2';
        this.series1.name = 'lmit';

        this.series2.itemsSource = sdata;
        this.series2.bindingX = 'x';
        this.series2.binding = 'y';
        this.series2.chartType = wjcChart.ChartType.Line;
        this.series2.style = {stroke: '#202020', strokeWidth: 1};
        this.series2.style.strokeDasharray = '5,1';
        this.series2.name = 'm+' + -1 + 's';

        y = mean + 0 * stdDev;
        sdata = [{x: 0, y: y}, {x: this.chartDataDetail.length - 1, y: y}];
        // let series = new wjcChart.Series();
        this.series3.itemsSource = sdata;
        this.series3.bindingX = 'x';
        this.series3.binding = 'y';
        this.series3.chartType = wjcChart.ChartType.Line;
        this.series3.style = {stroke: '#202020', strokeWidth: 1};
        this.series3.name = 'mean';

        y = mean + 1 * stdDev;
        sdata = [{x: 0, y: y}, {x: this.chartDataDetail.length - 1, y: y}];
        this.series4.itemsSource = sdata;
        this.series4.bindingX = 'x';
        this.series4.binding = 'y';
        this.series4.chartType = wjcChart.ChartType.Line;
        this.series4.style = {stroke: '#202020', strokeWidth: 1};
        this.series4.style.strokeDasharray = '5,1';
        this.series4.name = 'm+' + 1 + 's';
        chart.endUpdate();
    }

}