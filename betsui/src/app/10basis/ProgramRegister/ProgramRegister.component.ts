import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ProgramRegisterService} from "./ProgramRegister.service";
import {NotificationService} from "../../shared/utils/notification.service";
import {ProgramRegister} from "./ProgramRegister.model";
import {concat} from "rxjs/observable/concat";

@FadeInTop()
@Component({
    selector: 'ProgramRegister',
    templateUrl: './ProgramRegister.component.html',
    providers: [ProgramRegisterService,ProgramRegister]
})
export class ProgramRegisterComponent implements OnInit {

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

    submitted = false;

    ngOnInit() {
    }

    saveForm() {
        console.log(this.programRegister);
        // console.log('submitting LastTable form @' + this.tableForm);

        this.functionKeyMerge();    //functionKey 16자리를 만들어 주는 함수
        this.binDescriptionMerge();    //binDescription 8자리를 만들어 주는 함수

        this.programRegister.createUser = localStorage.getItem('loginId');  //브라우저의 localStorage 에서 로그인 아이디를 가져와 저장시 넘긴다.

        this.smartModEg1();
        /*
         this.programRegisterService.save(f).subscribe(
         data => this.tableForm = data,
         error => alert(error),
         () => console.log("Finish onSave()"));
         */
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
                /*                this.notificationService.smallBox({
                 title: "Callback function",
                 content: "<i class='fa fa-clock-o'></i> <i>You pressed Yes...</i>",
                 color: "#659265",
                 iconSmall: "fa fa-check fa-2x fadeInRight animated",
                 timeout: 4000
                 });*/
            }
            if (ButtonPressed === "No") {
                /*                this.notificationService.smallBox({
                 title: "Callback function",
                 content: "<i class='fa fa-clock-o'></i> <i>You pressed No...</i>",
                 color: "#C46A69",
                 iconSmall: "fa fa-times fa-2x fadeInRight animated",
                 timeout: 4000
                 });*/
            }

        });
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
