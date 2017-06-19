import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {TestLotCancelService} from "./testLotCancel.service";
import {TestLotCancel} from './testLotCancel.model';

/**
 * 1. File name     : testLotCancel.component.ts
 * 2. Discription   : CANCEL_BIN 테이블에서 조회한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0402 : Test Lot Cancel
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'TestLotCancel',
    templateUrl: 'testLotCancel.component.html',
    providers: [TestLotCancelService, TestLotCancel]
})
export class TestLotCancelComponent{
    UIID: string = "BETS-UI-0402";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: TestLotCancel = new TestLotCancel();
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: TestLotCancelService) {
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

    resetForm(){
        this.retrieveCondDto = new TestLotCancel();
        this.gridData = null;
        this.empty = true;
    }

    saveLastTableForm() {
        // if(this.componentData){this.componentData.}
        // console.log("endTimeStart : " + this.retrieveCondDto.endTimeStart);
        // console.log("endTimeEnd : " + this.retrieveCondDto.endTimeEnd);
        // console.log("partNumber : " + this.retrieveCondDto.partNumber);
        // console.log("processCode : " + this.retrieveCondDto.processCode);
        // console.log("testerModel : " + this.retrieveCondDto.testerModel);
        // console.log("testerNumber : " + this.retrieveCondDto.testerNumber);
        // console.log("head : " + this.retrieveCondDto.head);
        // console.log("testCounter : " + this.retrieveCondDto.testCounter);

        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
        this.loading = true;
        this.service.postLastTable(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.loading = false;              // 데이터 조회중 표시 기능 여부
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                },
                error => {
                    this.loading = false;
                    this.empty = true;
                    this.errorMessage = error;
                });
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_TestLotCancel'+'.xlsx');
    }


}
