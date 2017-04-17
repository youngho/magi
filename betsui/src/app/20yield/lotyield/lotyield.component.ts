import {Component, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {Lotyield} from './lotyield.model';
import {lotyieldService} from "./lotyield.service";


@FadeInTop()
@Component({
    selector: 'lotyield',
    templateUrl: './lotyield.component.html',
    providers: [lotyieldService, Lotyield]
})

export class lotyieldComponent {
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    gridData: wjcCore.CollectionView;
    private colInfo = new Array();// Grid dynamic columns
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private data: Lotyield = new Lotyield();

    constructor(private retrieveLastTableService: lotyieldService) {
    }
    onGridLoaded(){
        var self = this;
        setTimeout(function() {
            self.flexGrid.autoSizeColumns();
        },300);
    }

    resetForm() {
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
    }

    retrieveExecute() {
        this.data.endTimeStart = this.startDate + "000000";
        this.data.endTimeEnd = this.endDate + "999999";
        this.retrieveLastTableService.postLastTable(this.data)
            .subscribe((apps) => {

                    this.gridData = new wjcCore.CollectionView(apps);
                    if(this.gridData.isEmpty){
                        this.empty = true;
                    }else {
                        this.empty = false;
                    }
                },

                error => this.errorMessage = error);
    }
    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }

}
