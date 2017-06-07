import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {SlotYieldService} from "./slotYield.service";
import {SlotYield} from './slotYield.model';
/**
 * 1. File name     : slotYield.component.ts
 * 2. Discription   : BURN_IN_BOARD_MAP 테이블에서 Slot 별로 BIN의 결과를 보여준다
 *                    BI_SOCKET_NUMBER 컬럼에 들어 있는 BIN 문자열을 파싱하여 BIN별로 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0504 : slotYield
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'slotYield',
    templateUrl: 'slotYield.component.html',
    providers: [SlotYieldService, SlotYield]
})
export class SlotYieldComponent {
    UIID: string = "BETS-UI-0504";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: SlotYield = new SlotYield();
    private usageInfo = new UserUsage();

    constructor(private service: SlotYieldService) {
    }

    ngOnInit() {
        // this.retrieveCondDto.createDate = It makes server side service class
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
        this.retrieveCondDto = new SlotYield();
    }

    retrieveExecute() {
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
        this.service.retrieveService(this.retrieveCondDto)
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_slotYield'+'.xlsx');
    }
}
