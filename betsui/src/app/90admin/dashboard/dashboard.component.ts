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
    @ViewChild('saWidget1') saWidget1;

    chart1Flag = true;
    hitInfo: wjcChart.HitTestInfo;
    point: wjcCore.Point;
    chartElement: string;

    chartDataDetail: any[];
    constructor(private service: DashboardService) {
        this.chartDataDetail = [];
    }



    ngAfterViewInit() {
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
