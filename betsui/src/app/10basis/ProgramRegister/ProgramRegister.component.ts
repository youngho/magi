import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ProgramRegisterService} from "./ProgramRegister.service";
import {NotificationService} from "../../shared/utils/notification.service";


@FadeInTop()
@Component({
    selector: 'ProgramRegister',
    templateUrl: './ProgramRegister.component.html',
    providers: [ProgramRegisterService]
})
export class ProgramRegisterComponent implements OnInit {

    tableForm: FormGroup;
    product: FormControl;
    partNumber: FormControl;
    customer: FormControl;
    packageType: FormControl;
    processCode: FormControl;
    testerModel: FormControl;
    mainProgramName: FormControl;
    temperature: FormControl;
    sblYieldLimit: FormControl;
    sblSubbinANumber: FormControl;
    sblSubbinALimitPercent: FormControl;
    sblSubbinALimitCount: FormControl;
    sblSubbinBNumber: FormControl;
    sblSubbinBLimitPercent: FormControl;
    sblSubbinBLimitCount: FormControl;
    functionKey1: FormControl;
    functionKey2: FormControl;
    functionKey3: FormControl;
    functionKey4: FormControl;
    functionKey5: FormControl;
    functionKey6: FormControl;
    functionKey7: FormControl;
    functionKey8: FormControl;
    functionKey9: FormControl;
    functionKey10: FormControl;
    functionKey11: FormControl;
    functionKey12: FormControl;
    functionKey13: FormControl;
    functionKey14: FormControl;
    functionKey15: FormControl;
    functionKey16: FormControl;
    fab: FormControl;
    grade: FormControl;
    programVersion: FormControl;
    firmwareVersion: FormControl;
    testerOsVersion: FormControl;
    parallel: FormControl;
    firmwareName: FormControl;
    operator: FormControl;
    sysDate: FormControl;


    constructor(private fb: FormBuilder, private programRegisterService: ProgramRegisterService,private notificationService: NotificationService) {
        this.product = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.partNumber = new FormControl('', [Validators.required, Validators.minLength(11)]);
        this.customer = new FormControl('', [Validators.required, Validators.minLength(12)]);
        this.packageType = new FormControl('', [Validators.required, Validators.minLength(13)]);
        this.processCode = new FormControl('', [Validators.required, Validators.minLength(14)]);
        this.testerModel = new FormControl('', [Validators.required, Validators.minLength(15)]);
        this.mainProgramName = new FormControl('', [Validators.required, Validators.minLength(16)]);
        this.temperature = new FormControl('', [Validators.required, Validators.minLength(17)]);
        this.sblYieldLimit = new FormControl('', [Validators.required, Validators.minLength(18)]);
        this.sblSubbinANumber = new FormControl('', [Validators.required, Validators.minLength(19)]);
        this.sblSubbinALimitPercent = new FormControl('', [Validators.required, Validators.minLength(20)]);
        this.sblSubbinALimitCount = new FormControl('', [Validators.required, Validators.minLength(21)]);
        this.sblSubbinBNumber = new FormControl('', [Validators.required, Validators.minLength(22)]);
        this.sblSubbinBLimitPercent = new FormControl('', [Validators.required, Validators.minLength(23)]);
        this.sblSubbinBLimitCount = new FormControl('', [Validators.required, Validators.minLength(24)]);
        this.functionKey1 = new FormControl('', [Validators.required, Validators.minLength(25)]);
        this.functionKey2 = new FormControl('', [Validators.required, Validators.minLength(26)]);
        this.functionKey3 = new FormControl('', [Validators.required, Validators.minLength(27)]);
        this.functionKey4 = new FormControl('', [Validators.required, Validators.minLength(28)]);
        this.functionKey5 = new FormControl('', [Validators.required, Validators.minLength(29)]);
        this.functionKey6 = new FormControl('', [Validators.required, Validators.minLength(30)]);
        this.functionKey7 = new FormControl('', [Validators.required, Validators.minLength(31)]);
        this.functionKey8 = new FormControl('', [Validators.required, Validators.minLength(32)]);
        this.functionKey9 = new FormControl('', [Validators.required, Validators.minLength(33)]);
        this.functionKey10 = new FormControl('', [Validators.required, Validators.minLength(34)]);
        this.functionKey11 = new FormControl('', [Validators.required, Validators.minLength(35)]);
        this.functionKey12 = new FormControl('', [Validators.required, Validators.minLength(36)]);
        this.functionKey13 = new FormControl('', [Validators.required, Validators.minLength(37)]);
        this.functionKey14 = new FormControl('', [Validators.required, Validators.minLength(38)]);
        this.functionKey15 = new FormControl('', [Validators.required, Validators.minLength(39)]);
        this.functionKey16 = new FormControl('', [Validators.required, Validators.minLength(40)]);
        this.fab = new FormControl('', [Validators.required, Validators.minLength(41)]);
        this.grade = new FormControl('', [Validators.required, Validators.minLength(42)]);
        this.programVersion = new FormControl('', [Validators.required, Validators.minLength(43)]);
        this.firmwareVersion = new FormControl('', [Validators.required, Validators.minLength(44)]);
        this.testerOsVersion = new FormControl('', [Validators.required, Validators.minLength(45)]);
        this.firmwareName = new FormControl('', [Validators.required, Validators.minLength(46)]);
        this.operator = new FormControl('', [Validators.required, Validators.minLength(46)]);
        this.sysDate = new FormControl('', [Validators.required, Validators.minLength(46)]);

        this.tableForm = fb.group({
            product: this.product,
            partNumber: this.partNumber,
            customer: this.customer,
            packageType: this.packageType,
            processCode: this.processCode,
            testerModel: this.testerModel,
            mainProgramName: this.mainProgramName,
            temperature: this.temperature,
            sblYieldLimit: this.sblYieldLimit,
            sblSubbinANumber: this.sblSubbinANumber,
            sblSubbinALimitPercent: this.sblSubbinALimitPercent,
            sblSubbinALimitCount: this.sblSubbinALimitCount,
            sblSubbinBNumber: this.sblSubbinBNumber,
            sblSubbinBLimitPercent: this.sblSubbinBLimitPercent,
            sblSubbinBLimitCount: this.sblSubbinBLimitCount,
            functionKey1: this.functionKey1,
            functionKey2: this.functionKey2,
            functionKey3: this.functionKey3,
            functionKey4: this.functionKey4,
            functionKey5: this.functionKey5,
            functionKey6: this.functionKey6,
            functionKey7: this.functionKey7,
            functionKey8: this.functionKey8,
            functionKey9: this.functionKey9,
            functionKey10: this.functionKey10,
            functionKey11: this.functionKey11,
            functionKey12: this.functionKey12,
            functionKey13: this.functionKey13,
            functionKey14: this.functionKey14,
            functionKey15: this.functionKey15,
            functionKey16: this.functionKey16,
            fab: this.fab,
            grade: this.grade,
            programVersion: this.programVersion,
            firmwareVersion: this.firmwareVersion,
            testerOsVersion: this.testerOsVersion,
            parallel: this.parallel,
            firmwareName: this.firmwareName,
            operator: this.operator,
            sysDate: this.sysDate
        });
    }

    ngOnInit() {
    }

    saveForm(f) {
        console.log(this.tableForm.value);
        console.log('submitting LastTable form @' + this.tableForm);

        this.smartModEg1(f);


/*
        this.programRegisterService.save(f).subscribe(
            data => this.tableForm = data,
            error => alert(error),
            () => console.log("Finish onSave()"));
*/


        this.tableForm.markAsPristine();
    }

    smartModEg1(f) {
        this.notificationService.smartMessageBox({
            title: "Smart Alert!",
            content: "This is a confirmation box. Can be programmed for button callback",
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.programRegisterService.save(f).subscribe(
                    data => this.tableForm = data,
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
}
