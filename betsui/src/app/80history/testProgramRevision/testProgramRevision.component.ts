import {Component, ViewChild, Type, forwardRef, AfterViewInit} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {ProgramRevisionService} from "./testProgramRevision.service";
import {ProgramRevision} from './testProgramRevision.model';

/**
 * 1. File name     : testProgramRevision.component.ts
 * 2. Discription   : RTest프로그램을 저장 할 경우 업데이트 되지 않고 모두 Insert 동작이 일어나는데 등록 조회 화면에선 최근 데이터 1건만 보여진다. 이 히스토리 화면에선 모든 데이터가 보여진다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */

@FadeInTop()
@Component({
    selector: 'testProgramRevision',
    templateUrl: 'testProgramRevision.component.html',
    providers: [ProgramRevisionService, ProgramRevision],
    entryComponents: [forwardRef(() => ExpenceCellCmp), forwardRef(() => ExpenceCellCenterCmp)]
})
export class ProgramRevisionComponent {
    UIID: string = "BETS-UI-0801";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: ProgramRevision = new ProgramRevision();
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner

    columns: { binding?: string, header?: string, width?: any, format?: string, cellTemplate?: Type<any> }[];

    constructor(private service: ProgramRevisionService) {

        // wijmo 표에 컬럼형식을 표시하기 위한 변수 초기화
        this.columns = [
            // {header: 'testerModel', binding: 'testerModel', width: 80},
            // {header: 'processCode', binding: 'processCode'},
            // {header: 'pratNumber', binding: 'partNumber'},
            // {header: 'temperature', binding: 'temperature', format: 'n0'},
            // {header: 'temperature (with template)', binding: 'temperature', width: 180, cellTemplate: ExpenceCellCmp},
            // {header: 'temperatureLimit', binding: 'temperatureLimit', format: 'p0'}
        ];

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
        this.retrieveCondDto = new ProgramRevision();
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        // console.log("endTimeStart : " + this.retrieveCondDto.createDateStart);
        // console.log("createDateEnd : " + this.retrieveCondDto.createDateEnd);
        // console.log("partNumber : " + this.retrieveCondDto.partNumber);
        // console.log("processCode : " + this.retrieveCondDto.processCode);
        // console.log("testerModel : " + this.retrieveCondDto.testerModel);
        this.startDate = "20170101";
        this.retrieveCondDto.createDateStart = this.startDate + "000000";
        this.retrieveCondDto.createDateEnd = this.endDate + "999999";
        this.loading = true;
        this.service.postLastTable(this.retrieveCondDto)
            .subscribe((arrayJson) => {
                    var columnTypeObj;
                    var objJson = arrayJson[0]; // 반환 받은 json 배열의 첫번채 ROW를 사용한다

                    // Object 의 전체 컬럼요소에 대해 wijmo 에서 제공하는 컬럼타입으로 변환한다
                    for (let key in objJson) {
                        if (key == "temperature") {
                            columnTypeObj = {binding: key, header: this.unCamelCase(key), cellTemplate: ExpenceCellCmp};
                        } else if (key == "sblYieldLimit") {
                            columnTypeObj = {binding: key, header: this.unCamelCase(key), cellTemplate: ExpenceCellCenterCmp};
                        } else {
                            columnTypeObj = {binding: key, header: this.unCamelCase(key), width: key.length * 10};
                        }
                        this.columns.push(columnTypeObj);
                    }

                    // 실제 데이터가 표에 데이터를 맵핑 시키는 부분이다
                    this.gridData = new wjcCore.CollectionView(arrayJson);
                    this.loading = false;              // 데이터 조회중 표시 기능 여부

                    // 조회 결과가 없을 경우
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        // this.stopRefreshing();
                    }
                },
                error => {
                    this.loading = false;
                    this.empty = true;
                    this.errorMessage = error;
                });
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_testProgramRevision' + '.xlsx');
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

@Component({
    selector: 'expence-cell-cmp',
    template: `
        <div [ngStyle]="{color: item.temperature > 0 ? 'red' : 'blue'}">
            {{item.temperature}}
        </div>
        `,
})

export class ExpenceCellCmp {
    item: any;

    constructor() {
    }
}

@Component({
    selector: 'expence-cell-center-cmp',
    template: `
        <div style="text-align: center">
            {{item.sblYieldLimit}}
        </div>
        `,
})

export class ExpenceCellCenterCmp {
    item: any;

    constructor() {
    }
}