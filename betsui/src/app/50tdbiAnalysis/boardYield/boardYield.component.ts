import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {BoardYieldService} from "./boardYield.service";
import {BoardYield} from './boardYield.model';

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

    constructor(private service: BoardYieldService) {
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
        this.retrieveCondDto = new BoardYield();
    }

    saveLastTableForm() {
        // if(this.componentData){this.componentData.}
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }
}
