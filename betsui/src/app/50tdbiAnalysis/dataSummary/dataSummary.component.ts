import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {DataSummaryService} from "./dataSummary.service";
import {DataSummary} from './dataSummary.model';

/**
 * 1. File name     : dataSummary.component.ts
 * 2. Discription   : TDBI Data Summary
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0501 : Data Summary
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'dataSummary',
    templateUrl: 'dataSummary.component.html',
    providers: [DataSummaryService, DataSummary]
})
export class DataSummaryComponent {
    UIID: string = "BETS-UI-0501";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: DataSummary = new DataSummary();
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: DataSummaryService) {
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
        this.retrieveCondDto = new DataSummary();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
        // console.log("endTimeStart : " + this.retrieveCondDto.endTimeStart);
        // console.log("endTimeEnd : " + this.retrieveCondDto.endTimeEnd);
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_dataSummary' + '.xlsx');
    }

}
