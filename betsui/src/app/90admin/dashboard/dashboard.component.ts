import {Component, OnInit, ViewChild, AfterViewInit} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {DashboardService} from "./dashboard.service";

import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcCore from 'wijmo/wijmo';

@FadeInTop()
@Component({
    selector: 'DashboardComponent',
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit,AfterViewInit {
    itemsSource: any[];
    itemsSource2: any[];
    @ViewChild('chart') chart: wjcChart.FlexChart;

    private _nStudents = 200;
    private _nMaxPoints = 1600;
    constructor(private service: DashboardService) {
        this.itemsSource = [
            { mon: '-3월', tav: 3.1, tmin: 0.6, tmax: 5.6, prec: 78.7 },
            { mon: '-2월', tav: 3.2, tmin: 0.3, tmax: 6.2, prec: 52.0 },
            { mon: '-1월', tav: 5.7, tmin: 2.3, tmax: 9.3, prec: 73.6 },
            { mon: '-3주', tav: 8.7, tmin: 4.4, tmax: 13.0, prec: 45.9 },
            { mon: '-2주', tav: 12.6, tmin: 8.0, tmax: 17.0, prec: 64.8 },
            { mon: '-1주', tav: 15.3, tmin: 10.8, tmax: 19.6, prec: 70.9 },
            { mon: '-3일', tav: 17.2, tmin: 12.9, tmax: 21.4, prec: 70.2 },
            { mon: '-2일', tav: 17.2, tmin: 12.8, tmax: 21.6, prec: 74.2 },
            { mon: '당일', tav: 14.7, tmin: 10.7, tmax: 18.6, prec: 83.4 }
        ];
        this.itemsSource2 = [];
        // generate data
        for (var i = 0; i < this._nStudents; i++) {
            this.itemsSource2.push({
                number: i,
                score: this._nMaxPoints * 0.5 * (1 + Math.random())
            });
        }
    }
    testFuntion(){
        debugger;
        console.log("test")
    }
    ngAfterViewInit() {
        var chart = this.chart;
        var data = this.itemsSource2;
        if (!chart) {
            return;
        }

        // calculate statistics
        var mean = this._findMean(data);
        var stdDev = this._findStdDev(data, mean);

        chart.beginUpdate();
        // statistics series
        for (var i = -2; i <= 2; i++) {
            var y = mean + i * stdDev;
            var sdata = [{ x: 0, y: y }, { x: this._nStudents - 1, y: y }];
            var series = new wjcChart.Series();
            series.itemsSource = sdata;
            series.bindingX = 'x';
            series.binding = 'y';
            series.chartType = wjcChart.ChartType.Line;
            series.style = { stroke: '#202020', strokeWidth: 2 };
            if (Math.abs(i) == 1) {
                series.style.strokeDasharray = '5,1';
            } else if (Math.abs(i) == 2) {
                series.style.strokeDasharray = '2,2';
            }

            if (i > 0) {
                series.name = 'm+' + i + 's';
            } else if (i < 0) {
                series.name = 'm' + i + 's';
            } else {
                series.name = 'mean';
            }
            chart.series.push(series);
        }

        // calculate zone ranges
        var scores = [];
        for (var i = 0; i < data.length; i++)
            scores.push(data[i].score);
        scores.sort(function (a, b) { return b - a });

        var zones = [
            scores[this._getBoundingIndex(scores, 0.95)],
            scores[this._getBoundingIndex(scores, 0.75)],
            scores[this._getBoundingIndex(scores, 0.25)],
            scores[this._getBoundingIndex(scores, 0.05)]
        ];

        var colors = [
            'rgba(255,192,192,0.2)',
            'rgba(55,328,228,0.5)',
            'rgba(255,228,128,0.5)',
            'rgba(128,255,128,0.5)',
            'rgba(128,128,225,0.5)'
        ];

        // add zones to legend
        for (var i = 0; i < 5; i++) {
            var series = new wjcChart.Series();
            series.chartType = wjcChart.ChartType.Area
            series.style = { fill: colors[4 - i], stroke: 'transparent' };
            series.name = String.fromCharCode('A'.charCodeAt(0) + i);
            chart.series.push(series);
        }

        // render zones
        chart.rendering.addHandler((sender, e:any)=> {
            for (var i = 0; i < 5; i++) {
                var ymin = i == 0 ? chart.axisY.actualMin : zones[i - 1];
                var ymax = i == 4 ? chart.axisY.actualMax : zones[i];
                this._drawAlarmZone(chart, e.engine, chart.axisX.actualMin, ymin, chart.axisX.actualMax, ymax, colors[i]);
            }
        });

        chart.endUpdate();
    }
    private _findMean(data: any[]) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum += data[i].score;
        }
        return sum / data.length;
    }

    private _findStdDev(data:any[], mean:number) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            var d = data[i].score - mean;
            sum += d * d;
        }
        return Math.sqrt(sum / data.length);
    }

    private _getBoundingIndex(data: any[], frac: number) {
        var n = data.length;
        var i = Math.ceil(n * frac);
        while (i > data[0] && data[i] == data[i + 1])
            i--;
        return i;
    }

    private _drawAlarmZone(chart: wjcChart.FlexChart, engine: wjcChart.IRenderEngine, xmin: number, ymin: number, xmax: number, ymax: number, fill:string) {
        var pt1 = chart.dataToPoint(new wjcCore.Point(xmin, ymin));
        var pt2 = chart.dataToPoint(new wjcCore.Point(xmax, ymax));
        engine.fill = fill;
        engine.drawRect(Math.min(pt1.x, pt2.x), Math.min(pt1.y, pt2.y), Math.abs(pt2.x - pt1.x), Math.abs(pt2.y - pt1.y));
    }
    errorMessage = null;
    lowYieldLot : any[] = null;
    changeControl : any[] = null;
    ocap : any[] = null;

    ngOnInit() {
        this.service.retrievePost()
            .subscribe((apps) => {
                    console.log(apps);
                    this.lowYieldLot = apps.lowYieldLot;
                    this.changeControl = apps.changeControl;
                    this.ocap = apps.ocap;
                },
                error => this.errorMessage = error);

    } // ngOnInit End








}
