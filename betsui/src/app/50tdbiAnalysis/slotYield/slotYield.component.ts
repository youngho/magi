import {Component, ViewChild, forwardRef, Type} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {SlotYieldService} from "./slotYield.service";
import {SlotYield} from './slotYield.model';
/**
 * 1. File name     : slotYield.component.ts
 * 2. Discription   : BURN_IN_BOARD_MAP 테이블에서 Slot 별로 BIN의 결과를 보여준다
 *                    BI_SOCKET_NUMBER 컬럼에 들어 있는 BIN 문자열을 파싱하여 BIN별로 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0504 : Slot Yield
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'slotYield',
    templateUrl: 'slotYield.component.html',
    providers: [SlotYieldService, SlotYield],
    entryComponents: [forwardRef(() => ExpenceCellCmp)]
})
export class SlotYieldComponent {
    UIID: string = "BETS-UI-0504";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: SlotYield = new SlotYield();
    private usageInfo = new UserUsage();
    columns: { binding?: string, header?: string, width?: any, format?: string, sblSlotLimit?: string, cellTemplate?: Type<any> }[];
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: SlotYieldService) {
        // wijmo 표에 컬럼형식을 표시하기 위한 변수 초기화
        this.columns = [];
    }

    ngOnInit() {
        // this.retrieveCondDto.createDate = It makes server side service class
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
        this.retrieveCondDto = new SlotYield();
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        // if(this.componentData){this.componentData.}
        // console.log("endTimeStart : " + this.retrieveCondDto.endTimeStart);
        // console.log("endTimeEnd : " + this.retrieveCondDto.endTimeEnd);
        // console.log("partNumber : " + this.retrieveCondDto.partNumber);
        // console.log("processCode : " + this.retrieveCondDto.processCode);
        // console.log("testerModel : " + this.retrieveCondDto.testerModel);
        // console.log("testerNumber : " + this.retrieveCondDto.testerNumber);
        // console.log("head : " + this.retrieveCondDto.head);
        // console.log("testCounter : " + this.retrieveCondDto.testCounter);
        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
        this.loading = true;
        this.service.retrieveService(this.retrieveCondDto)
            .subscribe((arrayJson) => {
                    this.loading = false;
                    var columnTypeObj;
                    var objJson = arrayJson[0]; // 반환 받은 json 배열의 첫번채 ROW를 사용한다

                    // Object 의 전체 컬럼요소에 대해 wijmo 에서 제공하는 컬럼타입으로 변환한다
                    for (let key in objJson) {
                        if (key == "yield") {
                            columnTypeObj = {binding: key, header: this.unCamelCase(key), cellTemplate: ExpenceCellCmp, sblSlotLimit: this.retrieveCondDto.sblSlotLimit};
                        } else {
                            // columnTypeObj = {binding: key, header: this.unCamelCase(key), width: key.length * 10};
                            columnTypeObj = {binding: key, header: this.unCamelCase(key)};
                        }
                        this.columns.push(columnTypeObj);
                    }

                    // 실제 데이터가 표에 데이터를 맵핑 시키는 부분이다
                    this.gridData = new wjcCore.CollectionView(arrayJson);
                    // 조회 결과가 없을 경우
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                },
                error => {
                    this.loading = false;
                    this.errorMessage = error;
                });
        this.columns = [];
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_slotYield' + '.xlsx');
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
        <div [ngSwitch]="item.yield * 1 < sblSlotLimit * 1">
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
