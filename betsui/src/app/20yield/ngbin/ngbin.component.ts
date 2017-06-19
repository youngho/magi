import {Component, ViewChild, forwardRef, Type, Injectable} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {NgBinService} from "./ngbin.service";
import {NgBin} from "./ngbin.model";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";
/**
 * 1. File name     : ngbin.component.ts
 * 2. Discription   : NG_BIN 테이블의 TESTER_COUNTER의 숫자가 0,1,2,OP_BIN(9999) 로들어온다.(분류조건)
 *                    NG_BIN 테이블에 있는 NG_BIN(SUB_BIN)(1~999)의 값의 각 NG_BIN숫자별로 몇개씩 나왔는지 보여준다.
 *                    BETS-UI-0202
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'NgBin',
    templateUrl: 'ngbin.component.html',
    providers: [NgBinService, NgBin],
    entryComponents: [forwardRef(() => ExpenceCellCmp)]
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
    private retrieveCondDto: NgBin = new NgBin();
    private usageInfo = new UserUsage();
    columns: { binding?: string, header?: string, width?: any, format?: string, binSelection?: string, cellTemplate?: Type<any> }[];
    public loading = false;

    constructor(private service: NgBinService) {
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

    onGridLoaded() {
        var self = this;
        setTimeout(function () {
            self.flexGrid.autoSizeColumns();
        }, 300);
    }

    resetForm() {
        this.retrieveCondDto = new NgBin();
        this.gridData = null;
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
        // this.startDate = "20170101";
        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
        this.loading = true;
        this.service.postLastTable(this.retrieveCondDto)
            .subscribe((arrayJson) => {
                    this.loading = false;
                    var columnTypeObj;
                    var objJson = arrayJson[0]; // 반환 받은 json 배열의 첫번채 ROW를 사용한다

                    // Object 의 전체 컬럼요소에 대해 wijmo 에서 제공하는 컬럼타입으로 변환한다
                    for (let key in objJson) {
                        if (key.substr(0, 5) == "ngBin") {
                            columnTypeObj = {binding: key, header: this.unCamelCase(key), cellTemplate: ExpenceCellCmp, width: 50, binSelection: this.retrieveCondDto.binSelection};
                        } else {
                            // columnTypeObj = {binding: key, header: this.unCamelCase(key), width: key.length * 10};
                            columnTypeObj = {binding: key, header: this.unCamelCase(key)};
                        }
                        this.columns.push(columnTypeObj);
                    }
                            console.log(this.columns);

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

    /**
     * 엑셀 다운로드 함수
     */
    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_ngbin' + '.xlsx');
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
        <!--<div style="text-align: center">-->
        <!--<div [ngStyle]="{color: item.ngBin1 == 1 ? 'yellow' : 'blue', 'text-align' : 'center' , 'background-color':'yellow'}"  >-->
            <!--&lt;!&ndash;{{item.toString()}}&ndash;&gt;-->
            <!--{{item.ngBin1}}-->
            <!--&lt;!&ndash;{{value}}&ndash;&gt;-->
        <!--</div-->
            <span [ngSwitch]="cell.value == binSelection">
              <div *ngSwitchCase="true" style="color:yellow ; text-align: center ; background-color:red">{{cell.value}}</div>
              <div *ngSwitchDefault style="text-align: center">{{cell.value}}</div>
            </span>
        `,
})

@Injectable()
export class ExpenceCellCmp{
    item: any;

    constructor() {
    }


}