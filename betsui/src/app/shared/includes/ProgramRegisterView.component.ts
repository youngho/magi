import {Component, OnInit, Input, OnChanges} from '@angular/core';
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
    providers: [ProgramRegisterService,ProgramRegister]
})
export class ProgramRegisterViewComponent implements OnInit,OnChanges {
@Input()
programRegisterFor :ProgramRegister;

    public validationOptions = {
        rules : {
            partNumber : {
                required : true
            },
            processCode : {
                required : true,
                digits : true
            }
        },

        // Messages for form validation
        messages : {
            partNumber : {
                required : 'Please enter Part Number'
            },
            processCode : {
                required : 'Enter year',
                digits : 'Digits only please'
            }
        },

    };

    constructor(private programRegisterService: ProgramRegisterService, private notificationService: NotificationService, private programRegister:ProgramRegister) {

    }
    ngOnChanges(changes: any){
        debugger;
        console.log(this.programRegisterFor)
        this.programRegister=this.programRegisterFor

    };

    submitted = false;

    ngOnInit() {
    }

    resetForm(){
        this.programRegister = new ProgramRegister();  //�� Ŭ������ INPUT�ڽ��� ���ε��Ǿ� �־� �ʱ�ȭ �Ѵ�.
    }

    saveForm() {
        console.log(this.programRegister);
        // console.log('submitting LastTable form @' + this.tableForm);

        this.functionKeyMerge();    //functionKey 16�ڸ��� ����� �ִ� �Լ�
        this.binDescriptionMerge();    //binDescription 8�ڸ��� ����� �ִ� �Լ�

        this.programRegister.createUser = localStorage.getItem('loginId');  //�������� localStorage ���� �α��� ���̵� ������ ����� �ѱ��.

        //���߽� �α��� ���̵� ������� ����ϱ� ���� ���� �ڵ�
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
                this.programRegisterService.save(this.programRegister).subscribe(
                    data => this.programRegister = data,
                    error => alert(error),
                    () => console.log("Finish onSave()"));
            }
            if (ButtonPressed === "No") {

            }

        });
    }
    binDescriptionMerge(){
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

    functionKeyMerge(){
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
}
