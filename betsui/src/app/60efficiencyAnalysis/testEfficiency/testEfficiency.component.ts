import {Component, OnInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcChartAnimation from 'wijmo/wijmo.chart.animation';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {TestEfficiencyService} from "./testEfficiency.service";
import {TestEfficiency} from './testEfficiency.model';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'testEfficiency',
    templateUrl: 'testEfficiency.component.html',
    providers: [TestEfficiencyService, TestEfficiency]
})
export class TestEfficiencyComponent implements OnInit {
    UIID: string = "BETS-UI-0601";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: TestEfficiency = new TestEfficiency();
    private usageInfo = new UserUsage();

    /**
     * 파이차트를 그리기 위한 선언 부분
     * @param service
     */
    pieData: wjcCore.ObservableArray;
    flexPiePoints: number;
    title: string;
    duration: number;
    innerRadius: number;
    easing: string;
    animationMode: string;
    insertPieIdx: number;
    // references control in the view
    @ViewChild('flexPie') flexPie: wjcChart.FlexPie;
    @ViewChild('animation') animation: wjcChartAnimation.ChartAnimation;

    constructor(private service: TestEfficiencyService) {
        // 파이차트 기본값 설정
        this.flexPiePoints = 5;
        this.title = 'FlexPie';
        this.duration = 400;
        this.innerRadius = 0;
        this.easing = 'Swing';
        this.animationMode = 'All';
    }

    ngOnInit() {
        // this.data.createDate = It makes server side service class
        this.usageInfo.userId = localStorage.getItem("loginId");
        this.usageInfo.uiId = this.UIID;
        this.service.postUsage(this.usageInfo).subscribe(
            data => this.usageInfo = data,
            error => alert(error),
            // () => console.log("Finish onSave()")
        );
    }

    onGridLoaded(){
        var self = this;
        setTimeout(function() {
            self.flexGrid.autoSizeColumns();
        },300);
    }

    resetForm() {
        this.retrieveCondDto = new TestEfficiency();
        this.stopRefreshing();
        this.gridData = null;
    }

    efficiencyLots: any[] = null;

    retrieveExecute() {
        this.retrieveCondDto.searchTimeStart = this.startDate + "000000";
        this.retrieveCondDto.searchTimeEnd = this.endDate + "999999";
        this.service.postRetrieve(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        this.stopRefreshing();
                    }
                },
                error => this.errorMessage = error
            );
        // 효율에 사용된 LOT 조회
        this.service.postRetrieveLot(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.efficiencyLots = apps;
                },
                error => this.errorMessage = error
            );
        // Pie용 데이터 형식으로 조회
        this.service.postRetrievePie(this.retrieveCondDto)
            .subscribe((apps) => {
                    console.log(apps);
                    this.pieData = new wjcCore.ObservableArray(apps);
                    this.insertPieIdx = 1;
                },
                error => this.errorMessage = error
            );
    }

    private stopRefreshing() {
        this.isRequesting = false;
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_TestEfficiency' + '.xlsx');
    }




}
