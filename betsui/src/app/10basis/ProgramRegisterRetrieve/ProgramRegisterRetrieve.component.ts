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

@FadeInTop()
@Component({
    selector: 'ProgramRegisterRetrieveComponent',
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
        createDate: ""
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
        this.retrieveCondDto.createDate = info.createDate;

        this.service.postRetrieveByKey(this.retrieveCondDto)
            .subscribe((response) => {
                //JSON 객체로 가져오는것을 this.programRegister 에 넣어야 한다.
                this.programRegister = ProgramRegister.fromJSON(response);
                },
                error => alert(error));

        this.bgModel.show(function (info: any) {
            console.log(info.testerModel);
        });

    }

    saveLastTableForm() {
        // console.log("createDateStart : " + this.data.createDateStart);
        console.log("testerModel : " + this.programRegister.testerModel);
        console.log("partNumber : " + this.programRegister.partNumber);
        console.log("processCode : " + this.programRegister.processCode);
        // console.log("parallel : " + this.data.para);
        // console.log("mainProgramName : " + this.data.mainProgramName);
        // console.log("sblYieldLimit : " + this.data.sblYieldLimit);

        this.service.postRetrieve(this.programRegister)
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

    saveForm() {

        // console.log(this.tableForm.value);
        // console.log('submitting LastTable form @' + this.tableForm);
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
            title: "Smart Alert!",
            content: "This is a confirmation box. Can be programmed for button callback",
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.service.save(this.programRegister).subscribe(
                    data => this.programRegister = data,
                    error => alert(error),
                    () => this.bgModel.hide());
                // () => console.log("Finish onSave()"));

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
        this.programRegister.createDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.programRegister.createDateEnd = strDate;
    }

    ngOnInit() {
    }
}
