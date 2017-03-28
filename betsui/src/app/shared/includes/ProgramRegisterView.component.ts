import {Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {FadeInTop} from "../animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ProgramRegisterService} from "../../10basis/ProgramRegister/ProgramRegister.service";
import {NotificationService} from "../utils/notification.service";
import {ProgramRegister} from "../../10basis/ProgramRegister/ProgramRegister.model";
import {concat} from "rxjs/observable/concat";

@FadeInTop()
@Component({
    selector: 'ProgramRegisterVeiw',
    templateUrl: 'ProgramRegisterView.component.html',
    providers: [ProgramRegisterService, ProgramRegister]
})
export class ProgramRegisterViewComponent implements OnInit,OnChanges {
    @Input() programRegisterTo: ProgramRegister;
    @Input() newFlag=true;
    @Output()  modalClose = new EventEmitter(); //불른 곧에서 팝업 창을 닫게 하기위함

    public validationOptions = {
        rules: {
            partNumber: {
                required: true
            },
            processCode: {
                required: true,
                digits: true
            }
        },

        // Messages for form validation
        messages: {
            partNumber: {
                required: 'Please enter Part Number'
            },
            processCode: {
                required: 'Enter year',
                digits: 'Digits only please'
            }
        },

    };

    constructor(private programRegisterService: ProgramRegisterService, private notificationService: NotificationService, private programRegister: ProgramRegister) {
        
        this.modalClose.emit(false);
    }
    ;

    submitted = false;

    ngOnChanges(changes: any) {
        
        console.log(this.programRegisterTo)
        if (this.programRegisterTo.partNumber != null) {
            this.programRegister = this.programRegisterTo
            this.retrieveFunction();            //팝업 조회시 FunctionKey Y/N 맵핑
            this.retrievePassBinSelection();    //팝업 조회시 PassBINSelection Y/N 맵핑
        }

    }

    ngOnInit() {

    }

    resetForm() {
        this.programRegister = new ProgramRegister();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
        return false;
    }

    saveForm() {
        console.log(this.programRegister);
        // console.log('submitting LastTable form @' + this.tableForm);

        this.functionKeyMerge();    //functionKey 16자리를 만들어 주는 함수
        this.binDescriptionMerge();    //binDescription 8자리를 만들어 주는 함수

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
                this.programRegisterService.save(this.programRegister).subscribe(
                    data => {this.programRegister = data;  this.modalClose.emit(true);},
                    error => alert(error),
                    () => console.log("Finish onSave()"));


            }
            if (ButtonPressed === "No") {

            }

        });
    }

    modalClosefn(){

        this.modalClose.emit(true); //불른 곧에서 닫게 하기 위해
        return false;
    }

    binDescriptionMerge() {
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
