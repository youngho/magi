import {Component, OnInit, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {ProgramRegisterRetrieveService} from "./ProgramRegisterRetrieve.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {ProgramRegister} from "./ProgramRegister.model";
import {DatatableComponent} from "./datatable.component";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import * as wjcInput from 'wijmo/wijmo.input';
import {NotificationService} from "../../shared/utils/notification.service";

@FadeInTop()
@Component({
    selector: 'ProgramRegisterRetrieveComponent',
    styles: ['@media screen and (min-width:992px){.modal-lg{width: 1080px;}} .modal-lg .form-horizontal {margin:13px;}'],
    templateUrl: 'ProgramRegisterRetrieve.component.html',
    providers: [ProgramRegisterRetrieveService, ProgramRegister]
})

export class ProgramRegisterRetrieveComponent implements OnInit {
    empty = true;
    componentData = null;
    errorMessage = null;
    gridData: wjcCore.CollectionView;
    private colInfo = new Array();// Grid dynamic columns
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;

    @ViewChild('lgModal') bgModel;
    retrieveCondDto = {
        partNumber: "",
        processCode: "",
        testerModel: "",
    };

    retrieveByKeyDto = {
        createDate: "",
    };
    // private data: ProgramRegister = new ProgramRegister();

    constructor(private service: ProgramRegisterRetrieveService, private notificationService: NotificationService, private programRegister: ProgramRegister) {
    }

    submitted = false;

    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler = (flexGrid, dlg: wjcInput.Popup) => {
        debugger;
        // var flexGrid = this.flexGrid;
        if (!this.flexGrid) {
            return;
        }
        let info: any
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

                    this.retrieveFunction();            //팝업 조회시 FunctionKey Y/N 맵핑
                    this.retrievePassBinSelection();    //팝업 조회시 PassBINSelection Y/N 맵핑
                },
                error => alert(error));
        debugger;

        this.bgModel.show();
    }

    // showDialog(flexGrid, dlg: wjcInput.Popup) {
    //     if (dlg) {
    //         var inputs = <NodeListOf<HTMLInputElement>>dlg.hostElement.querySelectorAll('input');
    //         for (var i = 0; i < inputs.length; i++) {
    //             if (inputs[i].type != 'checkbox') {
    //                 inputs[i].value = '';
    //             }
    //         }
    //         dlg.modal = true;
    //         dlg.hideTrigger = dlg.modal ? wjcInput.PopupTrigger.None : wjcInput.PopupTrigger.Blur;
    //         dlg.show();
    //     }
    // };

    resetForm() {
        this.retrieveCondDto.partNumber = null;
        this.retrieveCondDto.processCode = null;
        this.retrieveCondDto.testerModel = null;
    }

    saveLastTableForm() {
        this.service.postRetrieve(this.retrieveCondDto)
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

    saveForm() {

        this.functionKeyMerge();    //functionKey 16자리를 만들어 주는 함수
        this.passBinSelectionMerge();    //binDescription 8자리를 만들어 주는 함수
        this.programRegister.createUser = localStorage.getItem('loginId');  //브라우저의 localStorage 에서 로그인 아이디를 가져와 저장시 넘긴다.
        //개발시 로그인 아이디가 없을경우 사용하기 위해 넣은 코드
        if (localStorage.getItem('loginId') === null) {
            this.programRegister.createUser = 'devdev';
        }
        this.smartModEg1();
        this.submitted = true;

    }

    smartModEg1() {
        this.notificationService.smartMessageBox({
            title: "BETS Alert!",
            content: "Do you want to save it?",
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.service.save(this.programRegister).subscribe(
                    data => this.programRegister = data,
                    error => alert(error),
                    () => this.bgModel.hide());
            }
            if (ButtonPressed === "No") {

            }

        });
    }

    exportExcel() {
        let rightNow = new Date();
        let res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");

        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {
            includeColumnHeaders: true,
            includeCellStyles: false
        }, res + '_programreg' + '.xlsx');
    }

    onSelectDateFrom(strDate: string) {
        this.programRegister.createDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.programRegister.createDateEnd = strDate;
    }

    ngOnInit() {
    }

    passBinSelectionMerge() {
        /**
         * 저장시 binDescription 8자리를 합쳐주는 함수
         */
        if (this.programRegister.passBinSelection1 === true) {
            this.programRegister.passBinSelection = 'Y';
        } else {
            this.programRegister.passBinSelection = 'N';
        }
        if (this.programRegister.passBinSelection2 === true) {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'Y';
        } else {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'N';
        }
        if (this.programRegister.passBinSelection3 === true) {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'Y';
        } else {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'N';
        }
        if (this.programRegister.passBinSelection4 === true) {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'Y';
        } else {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'N';
        }
        if (this.programRegister.passBinSelection5 === true) {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'Y';
        } else {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'N';
        }
        if (this.programRegister.passBinSelection6 === true) {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'Y';
        } else {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'N';
        }
        if (this.programRegister.passBinSelection7 === true) {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'Y';
        } else {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'N';
        }
        if (this.programRegister.passBinSelection8 === true) {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'Y';
        } else {
            this.programRegister.passBinSelection = this.programRegister.passBinSelection + 'N';
        }
    }

    functionKeyMerge() {
        /**
         * 저장시 FunctionKey
         * FunctionKey YN 변환
         */
        if (this.programRegister.functionKey1 === true) {
            this.programRegister.functionKey = 'Y';
        } else {
            this.programRegister.functionKey = 'N';
        }
        if (this.programRegister.functionKey2 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey3 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey4 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey5 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey6 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey7 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey8 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey9 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey10 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey11 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey12 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey13 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey14 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey15 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
        if (this.programRegister.functionKey16 === true) {
            this.programRegister.functionKey = this.programRegister.functionKey + 'Y';
        } else {
            this.programRegister.functionKey = this.programRegister.functionKey + 'N';
        }
    }

    retrieveFunction() {
        if (this.programRegister.functionKey.substr(0, 1) === "Y") {
            this.programRegister.functionKey1 = true;
        }
        if (this.programRegister.functionKey.substr(1, 1) === "Y") {
            this.programRegister.functionKey2 = true;
        }
        if (this.programRegister.functionKey.substr(2, 1) === "Y") {
            this.programRegister.functionKey3 = true;
        }
        if (this.programRegister.functionKey.substr(3, 1) === "Y") {
            this.programRegister.functionKey4 = true;
        }
        if (this.programRegister.functionKey.substr(4, 1) === "Y") {
            this.programRegister.functionKey5 = true;
        }
        if (this.programRegister.functionKey.substr(5, 1) === "Y") {
            this.programRegister.functionKey6 = true;
        }
        if (this.programRegister.functionKey.substr(6, 1) === "Y") {
            this.programRegister.functionKey7 = true;
        }
        if (this.programRegister.functionKey.substr(7, 1) === "Y") {
            this.programRegister.functionKey8 = true;
        }
        if (this.programRegister.functionKey.substr(8, 1) === "Y") {
            this.programRegister.functionKey9 = true;
        }
        if (this.programRegister.functionKey.substr(9, 1) === "Y") {
            this.programRegister.functionKey10 = true;
        }
        if (this.programRegister.functionKey.substr(10, 1) === "Y") {
            this.programRegister.functionKey11 = true;
        }
        if (this.programRegister.functionKey.substr(11, 1) === "Y") {
            this.programRegister.functionKey12 = true;
        }
        if (this.programRegister.functionKey.substr(12, 1) === "Y") {
            this.programRegister.functionKey13 = true;
        }
        if (this.programRegister.functionKey.substr(13, 1) === "Y") {
            this.programRegister.functionKey14 = true;
        }
        if (this.programRegister.functionKey.substr(14, 1) === "Y") {
            this.programRegister.functionKey15 = true;
        }
        if (this.programRegister.functionKey.substr(15, 1) === "Y") {
            this.programRegister.functionKey16 = true;
        }
    }

    retrievePassBinSelection() {
        if (this.programRegister.passBinSelection.substr(0, 1) === "Y") {
            this.programRegister.passBinSelection1 = true;
        }
        if (this.programRegister.passBinSelection.substr(1, 1) === "Y") {
            this.programRegister.passBinSelection2 = true;
        }
        if (this.programRegister.passBinSelection.substr(2, 1) === "Y") {
            this.programRegister.passBinSelection3 = true;
        }
        if (this.programRegister.passBinSelection.substr(3, 1) === "Y") {
            this.programRegister.passBinSelection4 = true;
        }
        if (this.programRegister.passBinSelection.substr(4, 1) === "Y") {
            this.programRegister.passBinSelection5 = true;
        }
        if (this.programRegister.passBinSelection.substr(5, 1) === "Y") {
            this.programRegister.passBinSelection6 = true;
        }
        if (this.programRegister.passBinSelection.substr(6, 1) === "Y") {
            this.programRegister.passBinSelection7 = true;
        }
        if (this.programRegister.passBinSelection.substr(7, 1) === "Y") {
            this.programRegister.passBinSelection8 = true;
        }
    }
}
