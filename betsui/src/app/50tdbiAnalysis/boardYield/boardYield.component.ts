import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {BoardYieldService} from "./boardYield.service";
import {BoardYield} from './boardYield.model';

/**
 * 1. File name     : boardYield.component.ts
 * 2. Discription   : Board 별 Yield 를 보여주는 화면
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0505 : Board Yield
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'BoardYield',
    templateUrl: 'boardYield.component.html',
    providers: [BoardYieldService, BoardYield]
})
export class BoardYieldComponent {
    UIID: string = "BETS-UI-0505";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: BoardYield = new BoardYield();
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: BoardYieldService) {
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
        this.retrieveCondDto = new BoardYield();
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        // console.log("endTimeStart : " + this.data.endTimeStart);
        // console.log("endTimeEnd : " + this.data.endTimeEnd);
        // console.log("partNumber : " + this.data.partNumber);
        // console.log("processCode : " + this.data.processCode);
        // console.log("testerModel : " + this.data.testerModel);
        // console.log("testerNumber : " + this.data.testerNumber);
        // console.log("head : " + this.data.head);
        // console.log("testCounter : " + this.data.testCounter);
        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
        this.loading = true;
        this.service.retrieveService(this.retrieveCondDto)
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_BoardYield'+'.xlsx');
    }
}
