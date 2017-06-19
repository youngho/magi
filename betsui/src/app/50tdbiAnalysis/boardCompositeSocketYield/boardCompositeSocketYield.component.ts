import {Component, ViewChild, Type} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {BoardCompositeSocketYieldService} from "./boardCompositeSocketYield.service";
import {BoardCompositeSocketYield} from './boardCompositeSocketYield.model';
/**
 * 1. File name     : boardCompositeSocketYield.component.ts
 * 2. Discription   : 특정 보드의 기간동안 소켓의 수율을 보여준다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'boardCompositeSocketYield',
    templateUrl: 'boardCompositeSocketYield.component.html',
    providers: [BoardCompositeSocketYieldService, BoardCompositeSocketYield],

})
export class BoardCompositeSocketYieldComponent {
    UIID: string = "BETS-UI-0507";  //Board Composite Socket Yield
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: BoardCompositeSocketYield = new BoardCompositeSocketYield();
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner
    columns: { binding?: string, header?: string, width?: any, format?: string, cellTemplate?: Type<any> }[];

    constructor(private service: BoardCompositeSocketYieldService) {
        // wijmo 표에 컬럼형식을 표시하기 위한 변수 초기화
        this.columns = [];
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

    /**
     *  Reset 버튼시 작동하는 함수
     */
    resetForm() {
        // 조회조건 DTO를 초기화 시킨다
        this.retrieveCondDto = new BoardCompositeSocketYield();
        this.gridData = null;
        this.empty = true;
    }

    /**
     * 조회함수
     */
    retrieveExecute() {
        // Start for test -- "Must comment when operate"
        // this.startDate = "20170101";
        // this.retrieveCondDto.biBoardId = "023100019";
        // End for test
        this.retrieveCondDto.biEndTimeStart = this.startDate + "000000";
        this.retrieveCondDto.biEndTimeEnd = this.endDate + "999999";
        this.loading = true;
        // service 클래스 호출
        this.service.postLastTable(this.retrieveCondDto)
            .subscribe((arrayJson) => {
                    this.loading = false;              // 데이터 조회중 표시 기능 여부
                    var columnTypeObj;
                    var objJson = arrayJson[0]; // 반환 받은 json 배열의 첫번채 ROW를 사용한다

                    // Object 의 전체 컬럼요소에 대해 wijmo 에서 제공하는 컬럼타입으로 변환한다
                    for (let key in objJson) {
                        if (key == "temperature") {
                            columnTypeObj = {binding: key, header: this.unCamelCase(key), cellTemplate: ExpenceCellCmp};
                        } else {
                            columnTypeObj = {binding: key, header: this.unCamelCase(key), width: key.length * 10};
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
                        // this.stopRefreshing();
                    }
                },
                error => {
                    this.loading = false;
                    this.empty = true;
                    this.errorMessage = error;
                });
    }

    /**
     * 엑셀 다운로드 함수
     */
    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_SocketYield'+'.xlsx');
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
        <div [ngStyle]="{color: item.temperature < retrieveCondDto.sblBoardLimt ? 'red' : 'blue'}">
            {{item.temperature}}
        </div>
        `,
})

export class ExpenceCellCmp {
    item: any;

    constructor() {
    }
}