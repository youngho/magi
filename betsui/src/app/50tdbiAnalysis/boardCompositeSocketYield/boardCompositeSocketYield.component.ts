import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {BoardCompositeSocketYieldService} from "./boardCompositeSocketYield.service";
import {BoardCompositeSocketYield} from './boardCompositeSocketYield.model';

@FadeInTop()
@Component({
    selector: 'boardCompositeSocketYield',
    templateUrl: 'boardCompositeSocketYield.component.html',
    providers: [BoardCompositeSocketYieldService, BoardCompositeSocketYield]
})
export class BoardCompositeSocketYieldComponent {
    UIID: string = "BETS-UI-0507";  //Board Composite Socket Yield
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private data: BoardCompositeSocketYield = new BoardCompositeSocketYield();
    private usageInfo = new UserUsage();

    constructor(private service: BoardCompositeSocketYieldService) {
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
        this.data = new BoardCompositeSocketYield();
    }

    retrieveExecute() {
        // console.log("biEndTimeStart : " + this.data.biEndTimeStart);
        // console.log("biEndTimeEnd : " + this.data.biEndTimeEnd);
        // console.log("partnumberName : " + this.data.biPartNumber);
        // console.log("lotNumber : " + this.data.biLotId);
        // console.log("processName : " + this.data.biProcessCode);
        // console.log("testerName : " + this.data.biTesterModel);
        // console.log("testerHead : " + this.data.biTestNumber);
        this.data.biEndTimeStart = this.startDate + "000000";
        this.data.biEndTimeEnd = this.endDate + "999999";
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_SocketYield'+'.xlsx');
    }
}
