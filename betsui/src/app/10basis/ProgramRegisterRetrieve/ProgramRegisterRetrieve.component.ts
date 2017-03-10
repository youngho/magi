import {Component, OnInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ProgramRegisterRetrieveService} from "./ProgramRegisterRetrieve.service";
import {Http, Response} from '@angular/http';

// import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ProgramRegister} from './ProgramRegister.model';

import {DatatableComponent} from './datatable.component';
// import DynamicComponent from './dynamic-component';
// import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';
import {NotificationService} from "../../shared/utils/notification.service";
import {isUndefined} from "util";

@FadeInTop()
@Component({
    selector: 'ProgramRegisterRetrieveComponent',
    styles: ['@media screen and (min-width:992px){.modal-lg{width: 1080px;}} .modal-lg .form-horizontal {margin:13px;}'],
    templateUrl: 'ProgramRegisterRetrieve.component.html',
    providers: [ProgramRegisterRetrieveService, ProgramRegister]
})

export class ProgramRegisterRetrieveComponent implements OnInit {

    @ViewChild('lgModal') bgModel;

    componentData = null;
    errorMessage = null;

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
    someClickHandler(info: any): void {
        console.log(info.createDate);


        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.retrieveByKeyDto.createDate = info.createDate;



        this.service.postRetrieveByKey(this.retrieveByKeyDto)
            .subscribe((response) => {
                //JSON 객체로 가져오는것을 this.programRegister 에 넣어야 한다.
                this.programRegister = ProgramRegister.fromJSON(response);

                if (this.programRegister.functionKey.substr(0,1) === "Y") {
                    this.programRegister.functionKey1 = true;
                }
                if (this.programRegister.functionKey.substr(1,1) === "Y") {
                    this.programRegister.functionKey2 = true;
                }
                if (this.programRegister.functionKey.substr(2,1) === "Y") {
                    this.programRegister.functionKey3 = true;
                }
                if (this.programRegister.functionKey.substr(3,1) === "Y") {
                    this.programRegister.functionKey4 = true;
                }
                if (this.programRegister.functionKey.substr(4,1) === "Y") {
                    this.programRegister.functionKey5 = true;
                }
                if (this.programRegister.functionKey.substr(5,1) === "Y") {
                    this.programRegister.functionKey6 = true;
                }
                if (this.programRegister.functionKey.substr(6,1) === "Y") {
                    this.programRegister.functionKey7 = true;
                }
                if (this.programRegister.functionKey.substr(7,1) === "Y") {
                    this.programRegister.functionKey8 = true;
                }
                if (this.programRegister.functionKey.substr(8,1) === "Y") {
                    this.programRegister.functionKey9 = true;
                }
                if (this.programRegister.functionKey.substr(9,1) === "Y") {
                    this.programRegister.functionKey10 = true;
                }
                if (this.programRegister.functionKey.substr(10,1) === "Y") {
                    this.programRegister.functionKey11 = true;
                }
                if (this.programRegister.functionKey.substr(11,1) === "Y") {
                    this.programRegister.functionKey12 = true;
                }
                if (this.programRegister.functionKey.substr(12,1) === "Y") {
                    this.programRegister.functionKey13 = true;
                }
                if (this.programRegister.functionKey.substr(13,1) === "Y") {
                    this.programRegister.functionKey14 = true;
                }
                if (this.programRegister.functionKey.substr(14,1) === "Y") {
                    this.programRegister.functionKey15 = true;
                }
                if (this.programRegister.functionKey.substr(15,1) === "Y") {
                    this.programRegister.functionKey16 = true;
                }



                },
                error => alert(error));

        this.bgModel.show(function (info: any) {
            console.log(info.testerModel);
        });

    }

    resetForm(){
        this.retrieveCondDto.partNumber = null;
        this.retrieveCondDto.processCode = null;
        this.retrieveCondDto.testerModel = null;
    }

    saveLastTableForm() {
        // console.log("createDateStart : " + this.data.createDateStart);
        // console.log("testerModel : " + this.programRegister.testerModel);
        // console.log("partNumber : " + this.programRegister.partNumber);
        // console.log("processCode : " + this.programRegister.processCode);
        // console.log("parallel : " + this.data.para);
        // console.log("mainProgramName : " + this.data.mainProgramName);
        // console.log("sblYieldLimit : " + this.data.sblYieldLimit);

        this.service.postRetrieve(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                //colReorder: true,
                                //scrollX: true,
                                data: apps,
                                // select: { style: 'single'},
                                columns: [
                                    {data: 'createDate'},
                                    {data: 'testerModel'},
                                    {data: 'partNumber'},
                                    {data: 'processCode'},
                                    {data: 'mainProgramName'},
                                    {data: 'sblYieldLimit'},
                                    {data: 'firmwareName'},
                                    {data: 'firmwareVersion'},
                                ],
                                rowCallback: (nRow: number, aData: any, iDisplayIndex: number, iDisplayIndexFull: number) => {
                                    let self = this;
                                    // Unbind first in order to avoid any duplicate handler
                                    // (see https://github.com/l-lin/angular-datatables/issues/87)
                                    $('td', nRow).unbind('click');
                                    $('td', nRow).bind('click', () => {
                                        self.someClickHandler(aData);
                                    });
                                    return nRow;
                                },
                                buttons: [
                                    'copy', 'excel', 'pdf', 'print'
                                ]
                            }
                        }
                    };
                },
                error => this.errorMessage = error);
    }

    saveForm() {

        this.functionKeyMerge();    //functionKey 16자리를 만들어 주는 함수
        this.binDescriptionMerge();    //binDescription 8자리를 만들어 주는 함수
        this.programRegister.createUser = localStorage.getItem('loginId');  //브라우저의 localStorage 에서 로그인 아이디를 가져와 저장시 넘긴다.
        //개발시 로그인 아이디가 없을경우 사용하기 위해 넣은 코드
        if(localStorage.getItem('loginId') === null){
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

    onSelectDateFrom(strDate: string) {
        this.programRegister.createDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.programRegister.createDateEnd = strDate;
    }

    ngOnInit() {
    }

    binDescriptionMerge(){
        /**
         * 저장시 binDescription 8자리를 합쳐주는 함수
         */
        if (this.programRegister.binDescription1 === true) {
            this.programRegister.binDescription = 'Y';
        } else {
            this.programRegister.binDescription = 'N';
        }
        if (this.programRegister.binDescription2 === true) {
            this.programRegister.binDescription = this.programRegister.binDescription + 'Y';
        } else {
            this.programRegister.binDescription = this.programRegister.binDescription + 'N';
        }
        if (this.programRegister.binDescription3 === true) {
            this.programRegister.binDescription = this.programRegister.binDescription + 'Y';
        } else {
            this.programRegister.binDescription = this.programRegister.binDescription + 'N';
        }
        if (this.programRegister.binDescription4 === true) {
            this.programRegister.binDescription = this.programRegister.binDescription + 'Y';
        } else {
            this.programRegister.binDescription = this.programRegister.binDescription + 'N';
        }
        if (this.programRegister.binDescription5 === true) {
            this.programRegister.binDescription = this.programRegister.binDescription + 'Y';
        } else {
            this.programRegister.binDescription = this.programRegister.binDescription + 'N';
        }
        if (this.programRegister.binDescription6 === true) {
            this.programRegister.binDescription = this.programRegister.binDescription + 'Y';
        } else {
            this.programRegister.binDescription = this.programRegister.binDescription + 'N';
        }
        if (this.programRegister.binDescription7 === true) {
            this.programRegister.binDescription = this.programRegister.binDescription + 'Y';
        } else {
            this.programRegister.binDescription = this.programRegister.binDescription + 'N';
        }
        if (this.programRegister.binDescription8 === true) {
            this.programRegister.binDescription = this.programRegister.binDescription + 'Y';
        } else {
            this.programRegister.binDescription = this.programRegister.binDescription + 'N';
        }
    }


    functionKeyMerge(){
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
}
