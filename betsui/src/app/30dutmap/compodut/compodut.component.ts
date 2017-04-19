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
    private retrieveCondDto: CompoDut = new CompoDut();

    onGridLoaded(){
        var self = this;
        setTimeout(function() {
            self.flexGrid.autoSizeColumns();
        },300);
    }

    resetForm() {
        this.retrieveCondDto = new CompoDut();
        this.stopRefreshing();
    }

    retrieveExecute() {
        // this.isRequesting = true;

        console.log("endTimeStart : " + this.retrieveCondDto.endTimeStart);
        console.log("endTimeEnd : " + this.retrieveCondDto.endTimeEnd);
        console.log("partNumber : " + this.retrieveCondDto.partNumber);
        console.log("processCode : " + this.retrieveCondDto.processCode);
        console.log("testerModel : " + this.retrieveCondDto.testerModel);
        console.log("testerNumber : " + this.retrieveCondDto.testerNumber);
        console.log("head : " + this.retrieveCondDto.head);
        console.log("testCounter : " + this.retrieveCondDto.testCounter);


        // this.isRequesting = false;
        this.service.postRetrieve(this.retrieveCondDto)
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
