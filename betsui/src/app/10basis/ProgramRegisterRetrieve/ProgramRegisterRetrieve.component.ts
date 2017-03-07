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

declare var $: any;

@FadeInTop()
@Component({
    selector: 'ProgramRegisterRetrieveComponent',
    templateUrl: 'ProgramRegisterRetrieve.component.html',
    providers: [ProgramRegisterRetrieveService]
})

export class ProgramRegisterRetrieveComponent implements OnInit {

    @ViewChild('lgModal') bgModel;

    componentData = null;
    errorMessage = null;
    message: string = '';

    private data : ProgramRegister = new ProgramRegister();

    tableForm: FormGroup;
    productName: FormControl;
    partNumber: FormControl;
    customer: FormControl;
    packageType: FormControl;
    processCode: FormControl;
    testerModel: FormControl;
    mainProgramName: FormControl;
    temperature: FormControl;
    sblYieldLimit: FormControl;
    sblSubBinaNumber: FormControl;
    sblSubBinaLimitLimit: FormControl;
    sblSubBinaLimitCount: FormControl;
    sblSubBinbNumber: FormControl;
    sblSubBinbLimitLimit: FormControl;
    sblSubBinbLimitCount: FormControl;
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

    constructor(private fb: FormBuilder, private service: ProgramRegisterRetrieveService, private http: Http,private notificationService: NotificationService) {
        // this.data.testerModel = 'T5585';
        // this.data.partNumber = 'K4B2G1646C-HC___CS-E_____';
        // this.data.processCode = 'T070512';
        // this.data.parallel = '256';
        // this.data.mainProgramName = 'bi4a96x1';
        // this.data.sblYieldLimit = '95';

        this.partNumber = new FormControl('', [Validators.required, Validators.minLength(11)]);
        this.productName = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.customer = new FormControl('', [Validators.required, Validators.minLength(12)]);
        this.packageType = new FormControl('', [Validators.required, Validators.minLength(13)]);
        this.processCode = new FormControl('', [Validators.required, Validators.minLength(14)]);
        this.testerModel = new FormControl('', [Validators.required, Validators.minLength(15)]);
        this.mainProgramName = new FormControl('', [Validators.required, Validators.minLength(16)]);
        this.temperature = new FormControl('', [Validators.required, Validators.minLength(17)]);
        this.sblYieldLimit = new FormControl('', [Validators.required, Validators.minLength(18)]);
        this.sblSubBinaNumber = new FormControl('', [Validators.required, Validators.minLength(19)]);
        this.sblSubBinaLimitLimit = new FormControl('', [Validators.required, Validators.minLength(20)]);
        this.sblSubBinaLimitCount = new FormControl('', [Validators.required, Validators.minLength(21)]);
        this.sblSubBinbNumber = new FormControl('', [Validators.required, Validators.minLength(22)]);
        this.sblSubBinbLimitLimit = new FormControl('', [Validators.required, Validators.minLength(23)]);
        this.sblSubBinbLimitCount = new FormControl('', [Validators.required, Validators.minLength(24)]);
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
            productName: this.productName,
            partNumber: this.partNumber,
            customer: this.customer,
            packageType: this.packageType,
            processCode: this.processCode,
            testerModel: this.testerModel,
            mainProgramName: this.mainProgramName,
            temperature: this.temperature,
            sblYieldLimit: this.sblYieldLimit,
            sblSubBinaNumber: this.sblSubBinaNumber,
            sblSubBinaLimitLimit: this.sblSubBinaLimitLimit,
            sblSubBinaLimitCount: this.sblSubBinaLimitCount,
            sblSubBinbNumber: this.sblSubBinbNumber,
            sblSubBinbLimitLimit: this.sblSubBinbLimitLimit,
            sblSubBinbLimitCount: this.sblSubBinbLimitCount,
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


    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler(info: any): void {
        this.message = info.testerModel + ' - ' + info.partNumber;

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.data.testerModel = info.testerModel;

        //(<FormControl>this.tableForm.controls['product']).setValue(info.testerModel, { onlySelf: true });

        this.bgModel.show(function (info:any) {
            console.log(info.testerModel);
        });

    }

    saveLastTableForm() {
        // console.log("createDateStart : " + this.data.createDateStart);
        console.log("testerModel : " + this.data.testerModel);
        console.log("partNumber : " + this.data.partNumber);
        console.log("processCode : " + this.data.processCode);
        // console.log("parallel : " + this.data.para);
        // console.log("mainProgramName : " + this.data.mainProgramName);
        // console.log("sblYieldLimit : " + this.data.sblYieldLimit);

        this.service.postRetrieve(this.data)
            .subscribe((apps) => {
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                colReorder: false,
                                data: apps,
                                //select: { style: 'single'},
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
    saveForm(f) {
        f.functionKey =
        f.functionKey1 +
        f.functionKey2 +
        f.functionKey3 +
        f.functionKey4 +
        f.functionKey5 +
        f.functionKey6 +
        f.functionKey7 +
        f.functionKey8 +
        f.functionKey9 +
        f.functionKey10 +
        f.functionKey11 +
        f.functionKey12 +
        f.functionKey13 +
        f.functionKey14 +
        f.functionKey15 +
        f.functionKey16l;

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
                this.service.save(f).subscribe(
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

    onSelectDateFrom(strDate: string) {
        this.data.createDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.data.createDateEnd = strDate;
    }

    ngOnInit() {
    }
}
