import {Component, OnInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {TdbiBoardTypeRegisterService} from "./TdbiBoardTypeRegister.service";
import {Http, Response} from '@angular/http';

// import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {TdbiBoardType} from './TdbiBoardType.model';

import {DatatableComponent} from './datatable.component';
// import DynamicComponent from './dynamic-component';
// import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';
import {NotificationService} from "../../shared/utils/notification.service";

declare var $: any;

@FadeInTop()
@Component({
    selector: 'TdbiBoardTypeRegisterRetrieveComponent',
    templateUrl: 'TdbiBoardTypeRegister.component.html',
    providers: [TdbiBoardTypeRegisterService]
})

export class TdbiBoardTypeRegisterComponent implements OnInit {

    @ViewChild('lgModal') bgModel;

    componentData = null;
    errorMessage = null;
    message: string = '';

    private data: TdbiBoardType = new TdbiBoardType();

    tableForm: FormGroup;
    boardTypeNo: FormControl;
    xSocketQty: FormControl;
    ySocketQty: FormControl;


    constructor(private fb: FormBuilder, private service: TdbiBoardTypeRegisterService, private http: Http, private notificationService: NotificationService) {
        //this.data.boardTypeNo = '0608';

        this.boardTypeNo = new FormControl('', [Validators.required, Validators.minLength(1)]);
        this.xSocketQty = new FormControl('', [Validators.required, Validators.minLength(1)]);
        this.ySocketQty = new FormControl('', [Validators.required, Validators.minLength(1)]);

        this.tableForm = fb.group({
            boardTypeNo: this.boardTypeNo,
            xSocketQty: this.xSocketQty,
            ySocketQty: this.ySocketQty
        });
    }


    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler(info: any): void {
        this.message = info.boardTypeNo + ' - ' + info.xSocketQty + ' - ' + info.ySocketQty;

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.data.boardTypeNo = info.boardTypeNo;

        (<FormControl>this.tableForm.controls['boardTypeNo'])
            .setValue(info.boardTypeNo, {onlySelf: true});

        this.bgModel.show(function (info: any) {
            console.log(info.boardTypeNo);
        });

    }

    saveLastTableForm() {
        console.log("boardTypeNo : " + this.data.boardTypeNo);
        console.log("xSocketQty : " + this.data.xSocketQty);
        console.log("ySocketQty : " + this.data.ySocketQty);


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
                                    {data: 'boardTypeNo'},
                                    {data: 'xSocketQty'},
                                    {data: 'ySocketQty'},
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
        console.log(this.tableForm.value);
        console.log('submitting LastTable form @' + this.tableForm);

        this.smartModEg1(f);

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
/*

    onSelectDateFrom(strDate: string) {
        this.data.sysDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.data.sysDateEnd = strDate;
    }
*/

    ngOnInit() {
    }
}
