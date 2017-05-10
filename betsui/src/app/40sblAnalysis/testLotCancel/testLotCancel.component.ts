import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {TestLotCancelService} from "./testLotCancel.service";
import {TestLotCancel} from './testLotCancel.model';

@FadeInTop()
@Component({
    selector: 'TestLotCancel',
    templateUrl: 'testLotCancel.component.html',
    providers: [TestLotCancelService, TestLotCancel]
})
export class TestLotCancelComponent{

    constructor(private service: TestLotCancelService) {
    }

    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: TestLotCancel = new TestLotCancel();


    resetForm(){
        this.retrieveCondDto = new TestLotCancel();
    }

    saveLastTableForm() {
        // if(this.componentData){this.componentData.}
        console.log("endTimeStart : " + this.retrieveCondDto.endTimeStart);
        console.log("endTimeEnd : " + this.retrieveCondDto.endTimeEnd);
        console.log("partNumber : " + this.retrieveCondDto.partNumber);
        console.log("processCode : " + this.retrieveCondDto.processCode);
        console.log("testerModel : " + this.retrieveCondDto.testerModel);
        console.log("testerNumber : " + this.retrieveCondDto.testerNumber);
        console.log("head : " + this.retrieveCondDto.head);
        console.log("testCounter : " + this.retrieveCondDto.testCounter);

        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }


}
