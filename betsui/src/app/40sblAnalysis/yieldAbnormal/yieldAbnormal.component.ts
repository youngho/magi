import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";
import {YieldAbnormalService} from "./yieldAbnormal.service";
import {YieldAbnormal} from './yieldAbnormal.model';
/**
 * 1. File name     : yieldAbnormal.component.ts
 * 2. Discription   : Abnormal 목록을 조회힌다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0401 : Yield Abnormal
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'SingledDutBin',
    templateUrl: 'yieldAbnormal.component.html',
    styles: ['select.input-sm {height: 20px;line-height: 20px;} label {margin-bottom: 0px;}'],
    providers: [YieldAbnormalService,YieldAbnormal]
})
export class YieldAbnormalComponent {
    UIID: string = "BETS-UI-0401";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCond : YieldAbnormal = new YieldAbnormal();
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: YieldAbnormalService) {}

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

    /**
     * Reset the retrieve form fields
     */
    resetForm(){
        this.retrieveCond.endTimeStart = null;
        this.retrieveCond.endTimeEnd = null;
        this.retrieveCond.partNumber = null;
        this.retrieveCond.processCode = null;
        this.retrieveCond.testerModel = null;
        this.retrieveCond.testerNumber = null;
        this.retrieveCond.head = null;
        this.retrieveCond.testCounter = null;
        this.retrieveCond.lotId = null;
        this.retrieveCond.mainProgramName = null;
        this.retrieveCond.boardId = null;
        this.retrieveCond.sblMode = null;
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        this.retrieveCond.endTimeStart = this.startDate + "000000";
        this.retrieveCond.endTimeEnd = this.endDate + "999999";
        // console.log("sysDateStart : " + this.retrieveCond.endTimeStart);
        // console.log("sysDateEnd : " + this.retrieveCond.endTimeEnd);
        // console.log("partnumberName : " + this.retrieveCond.partNumber);
        // console.log("lotNumber : " + this.retrieveCond.processCode);
        // console.log("processName : " + this.retrieveCond.processName);
        // console.log("testCount : " + this.retrieveCond.testCount);
        // console.log("testerName : " + this.retrieveCond.testerName);
        // console.log("testerHead : " + this.retrieveCond.testerHead);
        this.loading = true;
        this.service.retrieve(this.retrieveCond)
            .subscribe((apps) => {
                    this.loading = false;              // 데이터 조회중 표시 기능 여부
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        // this.stopRefreshing();
                    }
                },
                error => {
                    this.loading = false;
                    this.errorMessage = error;
                });
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }
}
