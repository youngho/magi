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
    private data : YieldAbnormal = new YieldAbnormal();


    resetForm(){
        this.data.endTimeStart = null;
        this.data.endTimeEnd = null;
        this.data.partNumber = null;
        this.data.processCode = null;
        this.data.testerModel = null;
        this.data.testerNumber = null;
        this.data.head = null;
        this.data.testCounter = null;
        this.data.lotId = null;
        this.data.mainProgramName = null;
        this.data.boardId = null;
        this.data.sblMode = null;
    }

    saveLastTableForm() {
        // console.log("sysDateStart : " + this.data.sysDateStart);
        // console.log("sysDateEnd : " + this.data.sysDateEnd);
        // console.log("partnumberName : " + this.data.partnumberName);
        // console.log("lotNumber : " + this.data.lotNumber);
        // console.log("processName : " + this.data.processName);
        // console.log("testCount : " + this.data.testCount);
        // console.log("testerName : " + this.data.testerName);
        // console.log("testerHead : " + this.data.testerHead);

        this.service.postLastTable(this.data)
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
