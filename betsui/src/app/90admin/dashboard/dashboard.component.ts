import {Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, AfterViewChecked} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {DashboardService} from "./dashboard.service";

import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcInput from 'wijmo/wijmo.input';

@FadeInTop()
@Component({
    selector: 'DashboardComponent',
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit,AfterViewInit, AfterViewChecked {
    @ViewChild('chart1') chart1: wjcChart.FlexChart;
    @ViewChild('chart2') chart2: wjcChart.FlexChart;
    @ViewChild('chart3') chart3: wjcChart.FlexChart;
    @ViewChild('chart4') chart4: wjcChart.FlexChart;
    @ViewChild('chart5') chart5: wjcChart.FlexChart;
    @ViewChild('chart6') chart6: wjcChart.FlexChart;
    @ViewChild('chart7') chart7: wjcChart.FlexChart;
    @ViewChild('chart8') chart8: wjcChart.FlexChart;
    @ViewChild('chartDetail') chartDetail: wjcChart.FlexChart;
    @ViewChild('chartDetailPupup') chartDetailPupup: wjcInput.Popup;
    @ViewChild('lgModal') bgModel;

    chart1Flag = true;
    hitInfo: wjcChart.HitTestInfo;
    point: wjcCore.Point;
    chartElement: string;
    private _nStudents = 100;
    private _nMaxPoints = 1600;
    chartDataDetail: any[];
    constructor(private service: DashboardService) {
        this.chartDataDetail = [];
        // // generate data
        // for (var i = 0; i < this._nStudents; i++) {
        //     this.itemsSource2.push({
        //         // number: i,
        //         // score: this._nMaxPoints * 0.5 * (1 + Math.random())
        //         endTime: i,
        //         yield: this._nMaxPoints * 0.5 * (1 + Math.random())
        //     });
        // }
    }



    ngAfterViewInit() {
        // this.chartDetailEdit();
        this.chart1Flag = false;
    }
    ngAfterViewChecked(){
        if (this.chart1) {
            this.chart1.hostElement.onmouseup = (e) => {
                this.hitInfo = this.chart1.hitTest(e);
                this.point = this.chart1.pointToData(e);
                this.chartElement = wjcChart.ChartElement[this.hitInfo.chartElement];
                this.chartPopup(this.hitInfo);
            };
        }
        if (this.chart2) {
            this.chart2.hostElement.onmouseup = (e) => {
                this.hitInfo = this.chart2.hitTest(e);
                this.point = this.chart2.pointToData(e);
                this.chartElement = wjcChart.ChartElement[this.hitInfo.chartElement];
                this.chartPopup(this.hitInfo);
            };
        }
        if (this.chart3) {
            this.chart3.hostElement.onmouseup = (e) => {
                this.hitInfo = this.chart3.hitTest(e);
                this.point = this.chart3.pointToData(e);
                this.chartElement = wjcChart.ChartElement[this.hitInfo.chartElement];
                this.chartPopup(this.hitInfo);
            };
        }
        if (this.chart4) {
            this.chart4.hostElement.onmouseup = (e) => {
                this.hitInfo = this.chart4.hitTest(e);
                this.point = this.chart4.pointToData(e);
                this.chartElement = wjcChart.ChartElement[this.hitInfo.chartElement];
                this.chartPopup(this.hitInfo);
            };
        }
        if (this.chart5) {
            this.chart5.hostElement.onmouseup = (e) => {
                this.hitInfo = this.chart5.hitTest(e);
                this.point = this.chart5.pointToData(e);
                this.chartElement = wjcChart.ChartElement[this.hitInfo.chartElement];
                this.chartPopup(this.hitInfo);
            };
        }
        if (this.chart6) {
            this.chart6.hostElement.onmouseup = (e) => {
                this.hitInfo = this.chart6.hitTest(e);
                this.point = this.chart6.pointToData(e);
                this.chartElement = wjcChart.ChartElement[this.hitInfo.chartElement];
                this.chartPopup(this.hitInfo);
            };
        }
        if (this.chart7) {
            this.chart7.hostElement.onmouseup = (e) => {
                this.hitInfo = this.chart7.hitTest(e);
                this.point = this.chart7.pointToData(e);
                this.chartElement = wjcChart.ChartElement[this.hitInfo.chartElement];
                this.chartPopup(this.hitInfo);
            };
        }
        if (this.chart8) {
            this.chart8.hostElement.onmouseup = (e) => {
                this.hitInfo = this.chart8.hitTest(e);
                this.point = this.chart8.pointToData(e);
                this.chartElement = wjcChart.ChartElement[this.hitInfo.chartElement];
                this.chartPopup(this.hitInfo);
            };
        }
    }
    retrieveChartDetailDto = {
        mon: "",
        rangeStart: "",
        rangeEnd: ""
    };
    private chartPopup = (hitInfo) => {
        // alert(hitInfo.item.tav);
        this.retrieveChartDetailDto.mon = hitInfo.item.mon;
        this.retrieveChartDetailDto.rangeStart = hitInfo.item.rangeStart;
        this.retrieveChartDetailDto.rangeEnd = hitInfo.item.rangeEnd;
        this.service.retrievePostDetail(this.retrieveChartDetailDto)
            .subscribe((apps) => {
                    console.log(apps);
                    this.chartDataDetail = apps.yieldItemList;
                    this.bgModel.show()
                    // this.chartDetailEdit();
                },
                error => this.errorMessage = error);

        // this.chartDetailPupup.modal = true;
        // this.chartDetailPupup.show();


    }
    chartDetailEdit=()=>{

        var chartDetail = this.chartDetail;
        var data2 = this.chartDataDetail;
        if (!chartDetail) {
            return;
        }
        // calculate statistics
        var mean = this._findMean(data2);
        var stdDev = this._findStdDev(data2, mean);

        chartDetail.beginUpdate();
        // statistics series
        for (var i = -2; i <= 2; i++) {
            var y = mean + i * stdDev;
            var sdata = [{x: 0, y: y}, {x: this._nStudents - 1, y: y}];
            var series = new wjcChart.Series();
            series.itemsSource = sdata;
            series.bindingX = 'x';
            series.binding = 'y';
            series.chartType = wjcChart.ChartType.Line;
            series.style = {stroke: '#202020', strokeWidth: 1};
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
            chartDetail.series.push(series);
        }

        // calculate zone ranges
        var yields = [];
        for (var i = 0; i < data2.length; i++)
            yields.push(data2[i].yield);
        yields.sort(function (a, b) {
            return b - a
        });

        var zones = [
            yields[this._getBoundingIndex(yields, 0.95)],
            yields[this._getBoundingIndex(yields, 0.75)],
            yields[this._getBoundingIndex(yields, 0.25)],
            yields[this._getBoundingIndex(yields, 0.05)]
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
            series.style = {fill: colors[4 - i], stroke: 'transparent'};
            series.name = String.fromCharCode('A'.charCodeAt(0) + i);
            chartDetail.series.push(series);
        }

        // render zones
        chartDetail.rendering.addHandler((sender, e: any) => {
            for (var i = 0; i < 5; i++) {
                var ymin = i == 0 ? chartDetail.axisY.actualMin : zones[i - 1];
                var ymax = i == 4 ? chartDetail.axisY.actualMax : zones[i];
                this._drawAlarmZone(chartDetail, e.engine, chartDetail.axisX.actualMin, ymin, chartDetail.axisX.actualMax, ymax, colors[i]);
            }
        });

        chartDetail.endUpdate();

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

    private _getBoundingIndex(data: any[], frac: number) {
        var n = data.length;
        var i = Math.ceil(n * frac);
        while (i > data[0] && data[i] == data[i + 1])
            i--;
        return i;
    }

    private _drawAlarmZone(chart: wjcChart.FlexChart, engine: wjcChart.IRenderEngine, xmin: number, ymin: number, xmax: number, ymax: number, fill: string) {
        var pt1 = chart.dataToPoint(new wjcCore.Point(xmin, ymin));
        var pt2 = chart.dataToPoint(new wjcCore.Point(xmax, ymax));
        engine.fill = fill;
        engine.drawRect(Math.min(pt1.x, pt2.x), Math.min(pt1.y, pt2.y), Math.abs(pt2.x - pt1.x), Math.abs(pt2.y - pt1.y));
    }

    errorMessage = null;
    lowYieldLot: any[] = null;
    changeControl: any[] = null;
    chartDatas: any[] = [{},{},{},{},{},{},{},{}];
    processCodes: String[] = ["", "", "", "", "", "", "", ""];


    ocap: any[] = null;

    ngOnInit() {
        this.chartDatas = [];
        this.service.retrievePost()
            .subscribe((apps) => {
                    console.log(apps);
                    this.lowYieldLot = apps.lowYieldLot;
                    this.changeControl = apps.changeControl;
                    this.chartDatas = apps.processChartList;
                    this.ocap = apps.ocap;
                    let i = 0;
                    for (let charData of apps.processChartList) {
                        // this.chartDatas[0];
                        if (i < 4) {
                            this.chartDatas[i] = charData.chart;
                            this.processCodes[i] = charData.processCode
                            this.chart1Flag = true;
                        }
                        i++;
                    }

                },
                error => this.errorMessage = error);


    } // ngOnInit End


}
