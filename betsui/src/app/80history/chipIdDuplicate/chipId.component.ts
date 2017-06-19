import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {ChipIdService} from "./chipId.service";
import {ChipId} from './chipId.model';

/**
 * 1. File name     : chipId.component.ts
 * 2. Discription   : CID 중복 목록을 조회한다
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0804 : CID Duplicate Retrieve
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'chipId',
    templateUrl: 'chipId.component.html',
    providers: [ChipIdService, ChipId]
})
export class ChipIdComponent {
    UIID: string = "BETS-UI-0804";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: ChipId = new ChipId();
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: ChipIdService) {
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

    resetForm() {
        // let rightNow = new Date();
        // let res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
        // this.startDate = res;
        // this.endDate = res;
        this.retrieveCondDto = new ChipId();
        this.gridData = null;
        this.empty = false;
    }

    retrieveExecute() {
        // console.log("endTimeStart : " + this.retrieveCondDto.fileCreateTimeStart);
        // console.log("createDateEnd : " + this.retrieveCondDto.fileCreateTimeEnd);
        // console.log("partNumber : " + this.data.partNumber);
        // console.log("processCode : " + this.data.processCode);
        // console.log("testerModel : " + this.data.testerModel);

        this.retrieveCondDto.fileCreateTimeStart = this.startDate + "000000";
        this.retrieveCondDto.fileCreateTimeEnd = this.endDate + "999999";
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_cid'+'.xlsx');
    }

}
