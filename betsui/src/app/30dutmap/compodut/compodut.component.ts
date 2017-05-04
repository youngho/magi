import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {CompoDutService} from "./compodut.service";
import {CompoDut} from "./compodut.model";


@FadeInTop()
@Component({
    selector: 'CompoDutBin',
    templateUrl: 'compodut.component.html',
    providers: [CompoDutService, CompoDut],
})
export class CompoDutComponent {
    UIID: string = "BETS-UI-0302";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: CompoDut = new CompoDut();
    private usageInfo = new UserUsage();

    constructor(private service: CompoDutService) {
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
self.flexGrid.allowMerging = 7;

        },300);
    }

    resetForm() {
        this.retrieveCondDto = new CompoDut();
        this.stopRefreshing();
    }

    retrieveExecute() {
        // this.isRequesting = true;

        // console.log("endTimeStart : " + this.retrieveCondDto.endTimeStart);
        // console.log("endTimeEnd : " + this.retrieveCondDto.endTimeEnd);
        // console.log("partNumber : " + this.retrieveCondDto.partNumber);
        // console.log("processCode : " + this.retrieveCondDto.processCode);
        // console.log("testerModel : " + this.retrieveCondDto.testerModel);
        // console.log("testerNumber : " + this.retrieveCondDto.testerNumber);
        // console.log("head : " + this.retrieveCondDto.head);
        // console.log("testCounter : " + this.retrieveCondDto.testCounter);

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

    itemFormatter = (panel: wjcGrid.GridPanel, r: number, c: number, cell: HTMLElement) => {
        if (panel.cellType == wjcGrid.CellType.Cell) {

            // use chartInfo to draw a bar chart
            var col = panel.columns[c];
            if (col.chartInfo) {
                cell.innerHTML = this._getBar(panel, r, c);
                return;
            }

            // create other types of custom content
            switch (col.name) {
                case 'MAIN_BIN':
                    var sales = panel.rows[r].dataItem['sales'],
                        first = sales[0],
                        last = sales[sales.length - 1],
                        delta = last / first - 1;
                    cell.innerHTML =
                        '<div style="color:' + (delta >= 0 ? 'green' : 'red') + '">' +
                        '<span style="float:left;width:60px;font-size:larger;text-align:right">' + wjcCore.Globalize.format(last, 'n2') + '</span>' +
                        '<span style="float:left;width:30px">' + (delta > 0 ? '&#x25b2;' : '&#x25bc;') + '</span>' +
                        '<span style="float:left;font-size:smaller;">(' + wjcCore.Globalize.format(delta, 'p0') + ')</span>' +
                        '<div>';
                    break;
            }
        }
    }
    private _getBar(panel: wjcGrid.GridPanel, r: number, c: number) {
        var col = panel.columns[c],
            ci = col.chartInfo,
            base = Math.min(ci.max, Math.max(ci.min, 0)),
            xbase = Math.round((base - ci.min) / (ci.max - ci.min) * 100),
            val = panel.getCellData(r, c, false),
            xval = Math.round((val - ci.min) / (ci.max - ci.min) * 100),
            style = 'box-sizing:border-box;height:100%;padding:4px;opacity:.5;';
        style += 'background-color:' + (val > 0 ? ci.posColor : ci.negColor) + ';';
        style += (xval > xbase)
            ? 'width:' + (xval - xbase) + '%;margin-left:' + xbase + '%;'
            : 'width:' + (xbase - xval) + '%;margin-left:' + xval + '%;';
        return '<div style="' + style + '" />';
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_CompositeDutMap'+'.xlsx');
    }
}
