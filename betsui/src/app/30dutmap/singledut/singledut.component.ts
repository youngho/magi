import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {SingleDutService} from "./singledut.service";
import {SingleDut} from "./singledut.model";


@FadeInTop()
@Component({
    selector: 'SingledDutBin',
    templateUrl: 'singledut.component.html',
    providers: [SingleDutService, SingleDut]
})
export class SingleDutComponent {
    UIID: string = "BETS-UI-0301";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: SingleDut = new SingleDut();
    private usageInfo = new UserUsage();

    constructor(private service: SingleDutService) {
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
        this.retrieveCondDto = new SingleDut();
        this.empty = true;
        this.isRequesting = false;
    }

    retrieveExecute() {
        this.isRequesting = true;
        // console.log("endTimeStart : " + this.retrieveCondDto.endTimeStart);
        // console.log("endTimeEnd : " + this.retrieveCondDto.endTimeEnd);
        // console.log("partNumber : " + this.retrieveCondDto.partNumber);
        // console.log("processCode : " + this.retrieveCondDto.processCode);
        // console.log("testerModel : " + this.retrieveCondDto.testerModel);
        // console.log("testerNumber : " + this.retrieveCondDto.testerNumber);
        // console.log("head : " + this.retrieveCondDto.head);
        // console.log("testCounter : " + this.retrieveCondDto.testCounter);

        this.service.postLastTable(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        this.stopRefreshing();
                    }
                },
                error => this.errorMessage = error);
    }

    private
    stopRefreshing() {
        this.isRequesting = false;
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_SingleDUT'+'.xlsx');
    }

}
