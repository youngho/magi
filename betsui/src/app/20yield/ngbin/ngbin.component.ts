/**
 ** BETS-UI-0202
 ** NG_BIN 테이블의 TESTER_COUNTER의 숫자가 0,1,2,OP_BIN(9999) 로들어온다.(분류조건)
 ** NG_BIN 테이블에 있는 NG_BIN(SUB_BIN)(1~999)의 값의 각 NG_BIN숫자별로 몇개씩 나왔는지 보여준다.
 */
import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {NgBinService} from "./ngbin.service";
import {NgBin} from "./ngbin.model";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

@FadeInTop()
@Component({
    selector: 'NgBin',
    templateUrl: 'ngbin.component.html',
    providers: [NgBinService, NgBin]
})
export class NgBinComponent {
    UIID: string = "BETS-UI-0202";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    gridData: wjcCore.CollectionView;
    private colInfo = new Array();// Grid dynamic columns
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private data: NgBin = new NgBin();
    private usageInfo = new UserUsage();

    constructor(private service: NgBinService) {
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

    retrieveExecute() {
        // console.log("endTimeStart : " + this.data.endTimeStart);
        // console.log("endTimeEnd : " + this.data.endTimeEnd);
        // console.log("partNumber : " + this.data.partNumber);
        // console.log("processCode : " + this.data.processCode);
        // console.log("testerModel : " + this.data.testerModel);
        // console.log("testerNumber : " + this.data.testerNumber);
        // console.log("head : " + this.data.head);
        // console.log("testCounter : " + this.data.testCounter);

        this.service.postLastTable(this.data)
            .subscribe((apps) => {
                this.gridData = new wjcCore.CollectionView(apps);
                if (this.gridData.isEmpty) {
                    this.empty = true;
                } else {
                    this.empty = false;
                }
            },
                error => this.errorMessage = error);
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }

}
