import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {LcVersionRegisterService} from "./lcVersionRegister.service";
import {NotificationService} from "../../shared/utils/notification.service";
import {LcVersionRegister} from "./lcVersionRegister.model";
import {concat} from "rxjs/observable/concat";

@FadeInTop()
@Component({
    selector: 'LcVersionRegister',
    templateUrl: 'lcVersionRegister.component.html',
    providers: [LcVersionRegisterService,LcVersionRegister]
})
export class LcVersionRegisterComponent implements OnInit {

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

    constructor(private programRegisterService: LcVersionRegisterService, private notificationService: NotificationService, private lcVersionRegister:LcVersionRegister) {
    }

    submitted = false;

    ngOnInit() {
    }

    resetForm(){
        this.lcVersionRegister = new LcVersionRegister();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
    }

    saveForm() {
        console.log(this.lcVersionRegister);
        // console.log('submitting LastTable form @' + this.tableForm);

        this.lcVersionRegister.createUser = localStorage.getItem('loginId');  //브라우저의 localStorage 에서 로그인 아이디를 가져와 저장시 넘긴다.
        
        //개발시 로그인 아이디가 없을경우 사용하기 위해 넣은 코드
        if(localStorage.getItem('loginId') === null){
            this.lcVersionRegister.createUser = 'devdev';
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
                this.programRegisterService.save(this.lcVersionRegister).subscribe(
                    data => this.lcVersionRegister = data,
                    error => alert(error),
                    () => console.log("Finish onSave()"));
            }
            if (ButtonPressed === "No") {

            }

        });
    }



}
