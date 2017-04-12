/**
 * BETS-UI-0401 : Yield Abnormal
 */
import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {YieldAbnormalService} from "./yieldAbnormal.service";
import {YieldAbnormal} from './yieldAbnormal.model';

@FadeInTop()
@Component({
    selector: 'SingledDutBin',
    templateUrl: 'yieldAbnormal.component.html',
    styles: ['select.input-sm {height: 20px;line-height: 20px;} label {margin-bottom: 0px;}'],
    providers: [YieldAbnormalService,YieldAbnormal]
})
export class YieldAbnormalComponent {
    constructor(private service: YieldAbnormalService) {}

    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCond : YieldAbnormal = new YieldAbnormal();

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

        this.service.retrieve(this.retrieveCond)
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }
}
