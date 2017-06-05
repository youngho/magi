import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {BoardSerialMapService} from "./boardSerialMap.service";
import {BoardSerialMap} from './boardSerialMap.model';

@FadeInTop()
@Component({
    selector: 'boardSerialMap',
    templateUrl: 'boardSerialMap.component.html',
    providers: [BoardSerialMapService, BoardSerialMap]
})
export class BoardSerialMapComponent {
    UIID: string = "BETS-UI-0502";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private data: BoardSerialMap = new BoardSerialMap();
    private usageInfo = new UserUsage();

    constructor(private service: BoardSerialMapService) {
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
        this.data = new BoardSerialMap();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
    }

    retrieveExecute() {
        console.log("endTimeStart : " + this.data.endTimeStart);
        console.log("endTimeEnd : " + this.data.endTimeEnd);
        this.data.endTimeStart = this.startDate + "000000";
        this.data.endTimeEnd = this.endDate + "999999";
        this.service.retrieveService(this.data)
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
