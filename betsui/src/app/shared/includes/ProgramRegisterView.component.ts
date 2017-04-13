import {Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {FadeInTop} from "../animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ProgramRegisterService} from "../../10basis/ProgramRegister/ProgramRegister.service";
import {NotificationService} from "../utils/notification.service";
import {ProgramRegister} from "../../10basis/ProgramRegister.model";
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
    @Output()  modalClose = new EventEmitter(); //�Ҹ� �𿡼� �˾� â�� �ݰ� �ϱ�����

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
            this.retrieveFunction();            //�˾� ��ȸ�� FunctionKey Y/N ����
            this.retrievePassBinSelection();    //�˾� ��ȸ�� PassBINSelection Y/N ����
        }

    }

    ngOnInit() {

    }

    resetForm() {
        this.programRegister = new ProgramRegister();  //�� Ŭ������ INPUT�ڽ��� ���ε��Ǿ� �־� �ʱ�ȭ �Ѵ�.
        return false;
    }

    saveForm() {
        console.log(this.programRegister);
        // console.log('submitting LastTable form @' + this.tableForm);

        this.functionKeyMerge();    //functionKey 16�ڸ��� ����� �ִ� �Լ�
        this.binDescriptionMerge();    //binDescription 8�ڸ��� ����� �ִ� �Լ�

        this.programRegister.createUser = localStorage.getItem('loginId');  //�������� localStorage ���� �α��� ���̵� ������ ����� �ѱ��.

        //���߽� �α��� ���̵� ������� ����ϱ� ���� ���� �ڵ�
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

        this.modalClose.emit(true); //�Ҹ� �𿡼� �ݰ� �ϱ� ����
        return false;
    }

    binDescriptionMerge() {
        /**
         * ����� binDescription 8�ڸ��� �����ִ� �Լ�
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
         * ����� FunctionKey
         * FunctionKey YN ��ȯ
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
