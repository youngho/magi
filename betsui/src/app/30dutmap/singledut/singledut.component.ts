import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {SingleDutService} from "./singledut.service";
import {SingleDut} from "./singledut.model";

@FadeInTop()
@Component({
    selector: 'SingledDutBin',
    templateUrl: 'singledut.component.html',
    providers: [SingleDutService, SingleDut]
})
export class SingleDutComponent {

    constructor(private service: SingleDutService) {
    }

    empty = true;
    componentData = null;
    errorMessage = null;
    private data: SingleDut = new SingleDut();
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;

    resetForm() {
        this.data = new SingleDut();
    }

    saveLastTableForm() {
        this.isRequesting = true;
        // if(this.componentData){this.componentData.}
        console.log("endTimeStart : " + this.data.endTimeStart);
        console.log("endTimeEnd : " + this.data.endTimeEnd);
        console.log("partNumber : " + this.data.partNumber);
        console.log("processCode : " + this.data.processCode);
        console.log("testerModel : " + this.data.testerModel);
        console.log("testerNumber : " + this.data.testerNumber);
        console.log("head : " + this.data.head);
        console.log("testCounter : " + this.data.testCounter);

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
                error => this.errorMessage = error);
    }

    private
    stopRefreshing() {
        this.isRequesting = false;
    }
}
