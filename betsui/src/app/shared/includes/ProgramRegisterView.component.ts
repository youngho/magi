import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {FadeInTop} from "../animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ProgramRegisterService} from "../../10basis/ProgramRegister/ProgramRegister.service";
import {NotificationService} from "../utils/notification.service";
import {ProgramRegister} from "../../10basis/ProgramRegister.model";
import {concat} from "rxjs/observable/concat";
import {UserUsage} from "../usage/userUsage.model";

@FadeInTop()
@Component({
    selector: 'ProgramRegisterVeiw',
    templateUrl: 'ProgramRegisterView.component.html',
    providers: [ProgramRegisterService, ProgramRegister]
})
export class ProgramRegisterViewComponent implements OnInit, OnChanges {
    UIID: string = "BETS-UI-0102";
    strInputResult: string = "<br><br>";
    @Input() programRegisterTo: ProgramRegister;
    @Input() newFlag = true;
    @Output() modalClose = new EventEmitter(); //�Ҹ� �𿡼� �˾� â�� �ݰ� �ϱ�����
    private usageInfo = new UserUsage();

    public validationOptions = {
        rules: {
            partNumber: {
                required: true
            },
            processCode: {
                required: true,
            },
            mainProgramName: {
                required: true,
            },
            temperature: {
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
                required: 'Please enter Process Code',
                digits: 'Digits only please'
            },
            mainProgramName: {
                required: 'Please enter Program Name'
            },
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
            this.retrieveRetestBinSelection();
        }
    }

    ngOnInit() {
        // this.data.createDate = It makes server side service class
        this.usageInfo.userId = localStorage.getItem("loginId");
        this.usageInfo.uiId = this.UIID;
        this.programRegisterService.postUsage(this.usageInfo).subscribe(
            data => this.usageInfo = data,
            error => alert(error),
            () => console.log("Finish onSave()")
        );
    }

    resetForm() {
        this.programRegister = new ProgramRegister();  //�� Ŭ������ INPUT�ڽ��� ���ε��Ǿ� �־� �ʱ�ȭ �Ѵ�.
        return false;
    }

    saveForm() {
        console.log(this.programRegister);
        // console.log('submitting LastTable form @' + this.tableForm);

        this.functionKeyMerge();    //functionKey 16�ڸ��� ����� �ִ� �Լ�
        this.passBinSelectionMerge();    //binDescription 8�ڸ��� ����� �ִ� �Լ�
        this.retestBinSelectionMerge();    //binDescription 8�ڸ��� ����� �ִ� �Լ�

        this.programRegister.createUser = localStorage.getItem('loginId');  //�������� localStorage ���� �α��� ���̵� ������ ����� �ѱ��.

        //���߽� �α��� ���̵� ������� ����ϱ� ���� ���� �ڵ�
        if (localStorage.getItem('loginId') === null) {
            this.programRegister.createUser = 'devdev';
        }

        if (this.programRegister.partNumber != null
            && this.programRegister.processCode != null
            && this.programRegister.mainProgramName != null
            && this.programRegister.dutMap != null
            && this.programRegister.temperature != null
            && this.programRegister.firmwareDirectory != null
        ) {
            this.programRegisterData();
            this.smartModEg1();
            this.submitted = true;
        }

    }

    smartModEg1() {
        this.notificationService.smartMessageBox({
            title: "BETS Alert!",
            // content: "Do you want to save it?",
            content: "Do you want to save it?" + this.strInputResult,
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.programRegisterService.save(this.programRegister).subscribe(
                    data => {
                        this.programRegister = data;
                        this.modalClose.emit(true);
                    },
                    error => alert(error),
                    () => console.log("Finish onSave()"));


            }
            if (ButtonPressed === "No") {

            }

        });
    }

    //required values show to Modal dialog
    programRegisterData() {
        // this.strInputResult += '<div class="col-md-offset-2 col-md-10">';
        // if (this.programRegister.partNumber != null) this.strInputResult += "<label class='col-md-6 control-label'>Part Number : " + this.programRegister.partNumber + "</label>";
        if (this.programRegister.partNumber != null) this.strInputResult += "Part Number : " + this.programRegister.partNumber + "<br>";
        if (this.programRegister.processCode != null) this.strInputResult += "Process Code : " + this.programRegister.processCode + "<br>";
        if (this.programRegister.mainProgramName != null) this.strInputResult += "Main Program Name : " + this.programRegister.mainProgramName + "<br>";
        if (this.programRegister.dutMap != null) this.strInputResult += "DUT Map : " + this.programRegister.dutMap + "<br>";
        if (this.programRegister.temperature != null) this.strInputResult += "Temperature : " + this.programRegister.temperature + "<br>";
        if (this.programRegister.firmwareDirectory != null) this.strInputResult += "Firmware Directory : " + this.programRegister.firmwareDirectory + "<br>";
        // if (this.programRegister.customer != null) this.strInputResult += "Customer : " + this.programRegister.customer + "<br>";
        // this.strInputResult += '<div>';


    }

    modalClosefn() {

        this.modalClose.emit(true); //�Ҹ� �𿡼� �ݰ� �ϱ� ����
        return false;
    }

    retestBinSelectionMerge() {
        /**
         * retestBinSelectionMerge
         */
        if (this.programRegister.retestBinSelection1 === true) {
            this.programRegister.retestBinSelection = 'Y';
        } else {
            this.programRegister.retestBinSelection = 'N';
        }
        if (this.programRegister.retestBinSelection2 === true) {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'Y';
        } else {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'N';
        }
        if (this.programRegister.retestBinSelection3 === true) {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'Y';
        } else {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'N';
        }
        if (this.programRegister.retestBinSelection4 === true) {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'Y';
        } else {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'N';
        }
        if (this.programRegister.retestBinSelection5 === true) {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'Y';
        } else {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'N';
        }
        if (this.programRegister.retestBinSelection6 === true) {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'Y';
        } else {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'N';
        }
        if (this.programRegister.retestBinSelection7 === true) {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'Y';
        } else {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'N';
        }
        if (this.programRegister.retestBinSelection8 === true) {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'Y';
        } else {
            this.programRegister.retestBinSelection = this.programRegister.retestBinSelection + 'N';
        }
    }

    passBinSelectionMerge() {
        /**
         * passBinSelectionMerge
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

    retrieveRetestBinSelection() {
        if (this.programRegister.retestBinSelection.substr(0, 1) === "Y") {
            this.programRegister.retestBinSelection1 = true;
        }
        if (this.programRegister.retestBinSelection.substr(1, 1) === "Y") {
            this.programRegister.retestBinSelection2 = true;
        }
        if (this.programRegister.retestBinSelection.substr(2, 1) === "Y") {
            this.programRegister.retestBinSelection3 = true;
        }
        if (this.programRegister.retestBinSelection.substr(3, 1) === "Y") {
            this.programRegister.retestBinSelection4 = true;
        }
        if (this.programRegister.retestBinSelection.substr(4, 1) === "Y") {
            this.programRegister.retestBinSelection5 = true;
        }
        if (this.programRegister.retestBinSelection.substr(5, 1) === "Y") {
            this.programRegister.retestBinSelection6 = true;
        }
        if (this.programRegister.retestBinSelection.substr(6, 1) === "Y") {
            this.programRegister.retestBinSelection7 = true;
        }
        if (this.programRegister.retestBinSelection.substr(7, 1) === "Y") {
            this.programRegister.retestBinSelection8 = true;
        }
    }
}
