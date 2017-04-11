import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {CompoDutService} from "./compodut.service";
import {CompoDut} from "./compodut.model";


@FadeInTop()
@Component({
    selector: 'CompoDutBin',
    templateUrl: 'compodut.component.html',
    providers: [CompoDutService, CompoDut],
})
export class CompoDutComponent {

    constructor(private service: CompoDutService) {
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
    private data: CompoDut = new CompoDut();



    resetForm() {
        this.data = new CompoDut();
        this.stopRefreshing();
    }

    saveLastTableForm() {
        // this.isRequesting = true;

        console.log("endTimeStart : " + this.data.endTimeStart);
        console.log("endTimeEnd : " + this.data.endTimeEnd);
        console.log("partNumber : " + this.data.partNumber);
        console.log("processCode : " + this.data.processCode);
        console.log("testerModel : " + this.data.testerModel);
        console.log("testerNumber : " + this.data.testerNumber);
        console.log("head : " + this.data.head);
        console.log("testCounter : " + this.data.testCounter);


        // this.isRequesting = false;
        this.service.postLastTable(this.data)
            .subscribe((apps) => {
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        this.stopRefreshing();
                    }
                },
                error => this.errorMessage = error
            );
    }

    private stopRefreshing() {
        this.isRequesting = false;
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }
}
