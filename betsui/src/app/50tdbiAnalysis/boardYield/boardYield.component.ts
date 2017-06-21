import {Component, ViewChild, Type} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {BoardYieldService} from "./boardYield.service";
import {BoardYield} from './boardYield.model';

/**
 * 1. File name     : boardYield.component.ts
 * 2. Discription   : Board 별 Yield 를 보여주는 화면
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0505 : Board Yield
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'BoardYield',
    templateUrl: 'boardYield.component.html',
    providers: [BoardYieldService, BoardYield]
})
export class BoardYieldComponent {
    UIID: string = "BETS-UI-0505";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: BoardYield = new BoardYield();
    private usageInfo = new UserUsage();
    columns: { binding?: string, header?: string, width?: any, format?: string, sblBoardLimit?: string, cellTemplate?: Type<any> }[];
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: BoardYieldService) {
    }

    ngOnInit() {
        // this.data.createDate = It makes server side service class
        this.usageInfo.userId = localStorage.getItem("loginId");
        this.usageInfo.uiId = this.UIID;
        this.service.postUsage(this.usageInfo).subscribe(
            data => this.usageInfo = data,
            error => alert(error),
            // () => console.log("Finish onSave()")
        );
    }

    onGridLoaded() {
        var self = this;
        setTimeout(function () {
            self.flexGrid.autoSizeColumns();
        }, 300);
    }

    resetForm() {
        this.retrieveCondDto = new BoardYield();
        this.gridData = null;
        this.empty = true;
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
        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
        this.loading = true;
        this.service.retrieveService(this.retrieveCondDto)
            .subscribe((arrayJson) => {
                    this.loading = false;              // 데이터 조회중 표시 기능 여부
                    var columnTypeObj;
                    var objJson = arrayJson[0]; // 반환 받은 json 배열의 첫번채 ROW를 사용한다

                    // Object 의 전체 컬럼요소에 대해 wijmo 에서 제공하는 컬럼타입으로 변환한다
                    for (let key in objJson) {
                        if (key == "yield") {
                            columnTypeObj = {binding: key, header: this.unCamelCase(key), cellTemplate: ExpenceCellCmp, sblBoardLimit: this.retrieveCondDto.sblBoardLimit};
                        } else {
                            // columnTypeObj = {binding: key, header: this.unCamelCase(key), width: key.length * 10};
                            columnTypeObj = {binding: key, header: this.unCamelCase(key)};
                        }
                        this.columns.push(columnTypeObj);
                    }

                    this.gridData = new wjcCore.CollectionView(arrayJson);

                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                },
                error => {
                    this.loading = false;
                    this.empty = true;
                    this.errorMessage = error;
                });
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_BoardYield' + '.xlsx');
    }

    // 컬럼헤더로 오는 java camel case 변수명을 문자열로 변환하는 함수
    unCamelCase(str) {
        return str
        // insert a space between lower & upper
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            // space before last upper in a sequence followed by lower
            .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
            // uppercase the first character
            .replace(/^./, function (str) {
                return str.toUpperCase();
            })
    }
}

/**
 * wijmo 테이블을 위한 컴포넌트
 */
@Component({
    selector: 'expence-cell-cmp',
    template: `
        <div [ngSwitch]="item.yield * 1 < sblBoardLimit * 1">
              <div *ngSwitchCase="true" style="color:yellow ; text-align: right ; background-color:red">{{item.yield}}</div>
              <div *ngSwitchDefault style="text-align: right">{{item.yield}}</div>
        </div>
        `,
})

export class ExpenceCellCmp {
    item: any;

    constructor() {
    }
}
