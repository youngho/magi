import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {BoardCompositeMapService} from "./boardCompositeMap.service";
import {BoardCompositeMap} from './boardCompositeMap.model';

@FadeInTop()
@Component({
    selector: 'boardCompositeMap',
    templateUrl: 'boardCompositeMap.component.html',
    providers: [BoardCompositeMapService, BoardCompositeMap]
})
export class BoardCompositeMapComponent {
    UIID: string = "BETS-UI-0503";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private data: BoardCompositeMap = new BoardCompositeMap();
    private usageInfo = new UserUsage();

    constructor(private service: BoardCompositeMapService) {
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
        this.data = new BoardCompositeMap();
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }
}
