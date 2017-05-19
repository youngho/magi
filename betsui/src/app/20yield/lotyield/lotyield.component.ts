/**
 ** LOT YIELD SUMMARY(COMPOSITE) - BETS-UI-0201
 ** 특정기간 모든 LOTS, OP_BIN, YIELD, SUMMARY
 ** MAIN_BIN 테이블의 TESTER_COUNTER 컬럼의 숫자가 0,1,2,OP_BIN(9999)로 들어온다.(분류조건)
 ** MAIN_BIN 테이블에 있는 OP_BIN 컬럼 값에 BIN1 ~ BIN9가 들어있다.(콤마로 구분되어 있음)
 ** 각 BIN의 값을 보여주고 전체합, 패스빈값들의 합, YIELD를 보여준다.
 */
import {Component, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {Lotyield} from './lotyield.model';
import {lotyieldService} from "./lotyield.service";


@FadeInTop()
@Component({
    selector: 'lotyield',
    templateUrl: './lotyield.component.html',
    providers: [lotyieldService, Lotyield]
})

export class lotyieldComponent {
    UIID: string = "BETS-UI-0201";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    gridData: wjcCore.CollectionView;
    private colInfo = new Array();// Grid dynamic columns
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: Lotyield = new Lotyield();
    private usageInfo = new UserUsage();

    constructor(private service: lotyieldService) {
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

    onGridLoaded() {
        var self = this;
        setTimeout(function () {
            self.flexGrid.autoSizeColumns();
        }, 300);
    }

    resetForm() {
        this.retrieveCondDto = new Lotyield();
    }

    retrieveExecute() {
        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
        this.service.postLastTable(this.retrieveCondDto)
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_yield' + '.xlsx');
    }

}
