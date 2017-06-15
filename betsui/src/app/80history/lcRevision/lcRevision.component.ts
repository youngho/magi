import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {LcRevisionService} from "./lcRevision.service";
import {LcRevision} from './lcRevision.model';

/**
 * 1. File name     : lcRevision.model.ts
 * 2. Discription   : LC 이력을 조회하는 화면이다. 사실상 LC관련 입력 업무가 없기 때문에 사용하지 않는 화면이다.
 * 3. writer        : yhkim     2017.02.17
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'lcRevision',
    templateUrl: 'lcRevision.component.html',
    providers: [LcRevisionService, LcRevision]
})
export class LcRevisionComponent {
    UIID: string = "BETS-UI-0804";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: LcRevision = new LcRevision();
    private usageInfo = new UserUsage();

    constructor(private service: LcRevisionService) {
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
        this.retrieveCondDto = new LcRevision();
        // this.stopRefreshing();
        this.gridData = null;
    }

    retrieveExecute() {
        // console.log("endTimeStart : " + this.data.createDateStart);
        // console.log("createDateEnd : " + this.data.createDateEnd);
        // console.log("partNumber : " + this.data.partNumber);
        // console.log("processCode : " + this.data.processCode);
        // console.log("testerModel : " + this.data.testerModel);

        this.retrieveCondDto.createDateStart = this.startDate + "000000";
        this.retrieveCondDto.createDateEnd = this.endDate + "999999";
        this.service.postLastTable(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        // this.stopRefreshing();
                    }
                },
                error => this.errorMessage = error);
    }
    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_lcRevision'+'.xlsx');
    }

}
