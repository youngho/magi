import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {ProgramRevisionService} from "./testProgramRevision.service";
import {ProgramRevision} from './testProgramRevision.model';

/**
 * 1. File name     : testProgramRevision.component.ts
 * 2. Discription   : RTest프로그램을 저장 할 경우 업데이트 되지 않고 모두 Insert 동작이 일어나는데 등록 조회 화면에선 최근 데이터 1건만 보여진다. 이 히스토리 화면에선 모든 데이터가 보여진다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */

@FadeInTop()
@Component({
    selector: 'testProgramRevision',
    templateUrl: 'testProgramRevision.component.html',
    providers: [ProgramRevisionService, ProgramRevision]
})
export class ProgramRevisionComponent {
    UIID: string = "BETS-UI-0801";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: ProgramRevision = new ProgramRevision();
    private usageInfo = new UserUsage();

    constructor(private service: ProgramRevisionService) {
    }

    ngOnInit() {
        // this.data.createDate = It makes server side service class
        this.usageInfo.userId = localStorage.getItem("loginId");
        this.usageInfo.uiId = this.UIID;
        this.service.postUsage(this.usageInfo).subscribe(
            data => this.usageInfo = data,
            error => alert(error),
            () => console.log("Finish onSave()")
        );
    }

    onGridLoaded(){
        var self = this;
        setTimeout(function() {
            self.flexGrid.autoSizeColumns();
        },300);
    }

    resetForm() {
        this.retrieveCondDto = new ProgramRevision();
        // this.stopRefreshing();
        this.gridData = null;
    }

    retrieveExecute() {
        // console.log("endTimeStart : " + this.retrieveCondDto.createDateStart);
        // console.log("createDateEnd : " + this.retrieveCondDto.createDateEnd);
        // console.log("partNumber : " + this.retrieveCondDto.partNumber);
        // console.log("processCode : " + this.retrieveCondDto.processCode);
        // console.log("testerModel : " + this.retrieveCondDto.testerModel);

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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_testProgramRevision'+'.xlsx');
    }

}
