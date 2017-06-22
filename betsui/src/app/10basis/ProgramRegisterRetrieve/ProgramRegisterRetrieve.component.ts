import {Component, OnInit, ViewChild, forwardRef, Type} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from "wijmo/wijmo.grid.xlsx";
import {NotificationService} from "../../shared/utils/notification.service";
import {UserUsage} from "../../shared/usage/userUsage.model";

import {ProgramRegisterRetrieveService} from "./ProgramRegisterRetrieve.service";
import {ProgramRegister} from "../ProgramRegister.model";
/**
 * 1. File name     : ProgramRegisterRetrieve.component.ts
 * 2. Discription   : 기본 테스트 프로그램 정보를 조회 수정한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'ProgramRegisterRetrieveComponent',
    styles: ['@media screen and (min-width:992px){.modal-lg{width: 1080px;}} .modal-lg .form-horizontal {margin:13px;}'],
    templateUrl: 'ProgramRegisterRetrieve.component.html',
    providers: [ProgramRegisterRetrieveService, ProgramRegister],
    entryComponents: [forwardRef(() => ExpenceCellCmp)]
})

export class ProgramRegisterRetrieveComponent implements OnInit {
    UIID: string = "BETS-UI-0101";
    private usageInfo = new UserUsage();
    empty = true;
    componentData = null;
    errorMessage = null;
    submitted = false;
    gridData: wjcCore.CollectionView;
    private colInfo = new Array();// Grid dynamic columns title
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    @ViewChild('lgModal') bgModel;
    public loading = false; // Control for Grid Table Spinner

    retrieveCondDto = {
        partNumber: "",
        processCode: "",
        testerModel: "",
    };
    columns: { binding?: string, header?: string, width?: any, format?: string, cellTemplate?: Type<any> }[];

    constructor(private service: ProgramRegisterRetrieveService, private notificationService: NotificationService, private programRegister: ProgramRegister) {
        // wijmo 표에 컬럼형식을 표시하기 위한 변수 초기화
        this.columns = [];
    }

    /**
     * 로그인한 사용자가 해당 메뉴에 접근할 경우 postUsage 서비스를 호출하여 해당 사용자의 접근 로그를 기록한다.
     */
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
            // self.flexGrid.autoSizeColumns();
        }, 300);
    }

    resetForm() {
        this.retrieveCondDto.partNumber = null;
        this.retrieveCondDto.processCode = null;
        this.retrieveCondDto.testerModel = null;
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        this.loading = true;
        this.service.postRetrieve(this.retrieveCondDto)
            .subscribe((arrayJson) => {
                    var columnTypeObj;
                    var objJson = arrayJson[0]; // 반환 받은 json 배열의 첫번채 ROW를 사용한다

                    // Object 의 전체 컬럼요소에 대해 wijmo 에서 제공하는 컬럼타입으로 변환한다
                    for (let key in objJson) {
                        if (key == "temperature") {
                            columnTypeObj = {binding: key, header: this.unCamelCase(key), cellTemplate: ExpenceCellCmp};
                        } else {
                            // columnTypeObj = {binding: key, header: this.unCamelCase(key), width: key.length * 10};
                            columnTypeObj = {binding: key, header: this.unCamelCase(key)};
                        }
                        this.columns.push(columnTypeObj);
                    }

                    // 실제 데이터가 표에 데이터를 맵핑 시키는 부분이다
                    this.gridData = new wjcCore.CollectionView(arrayJson);

                    this.loading = false;

                    // 조회 결과가 없을 경우
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
        this.columns = [];
    }

    retrieveByKeyDto = {
        createDate: "",
    };


    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler = (flexGrid) => {
        if (!this.flexGrid) {
            return;
        }
        let info: any;
        info = flexGrid.selectedItems[0];
        console.log(info.createDate);

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.retrieveByKeyDto.createDate = info.createDate;
        this.retrieveByKeyDto.createDate = this.retrieveByKeyDto.createDate.replace(/:/g, "");
        this.retrieveByKeyDto.createDate = this.retrieveByKeyDto.createDate.replace(" ", "");
        this.retrieveByKeyDto.createDate = this.retrieveByKeyDto.createDate.replace(/-/g, "");

        this.service.postRetrieveByKey(this.retrieveByKeyDto)
            .subscribe((response) => {
                    //JSON 객체로 가져오는것을 this.programRegister 에 넣어야 한다.
                    this.programRegister = ProgramRegister.fromJSON(response);
                },
                error => alert(error));
        this.bgModel.show();
    }

    //팝업 객체로부터 이벤트를 받아 팝업 모달 창을 닫음(감춤);
    modalClose(clsoe: boolean) {
        if (clsoe) {
            this.bgModel.hide();
        }
        this.retrieveExecute();
    }

    /**
     * 엑셀 다운로드 함수
     */
    exportExcel() {
        let rightNow = new Date();
        let res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");

        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {
            includeColumnHeaders: true,
            includeCellStyles: false
        }, res + '_programreg' + '.xlsx');
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