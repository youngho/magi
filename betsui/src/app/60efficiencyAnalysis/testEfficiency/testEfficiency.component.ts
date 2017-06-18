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
/**
 * 1. File name     : testEfficiency.component.ts
 * 2. Discription   : Test Efficiency 조회 기능 각 시간을 산출하는 로직이 중요하다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0601 : Test Efficiency
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
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
    public loading = false; // Control for Grid Table Spinner

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
        this.gridData = null;
        this.empty = true;
    }

    efficiencyLots: any[] = null;

    retrieveExecute() {
        this.retrieveCondDto.searchTimeStart = this.startDate + "000000";
        this.retrieveCondDto.searchTimeEnd = this.endDate + "999999";
        this.loading = true;
        this.service.postRetrieve(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.loading = false;              // 데이터 조회중 표시 기능 여부
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
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
                error => {
                    this.loading = false;
                    this.empty = true;
                    this.errorMessage = error;
                });
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_TestEfficiency' + '.xlsx');
    }
}