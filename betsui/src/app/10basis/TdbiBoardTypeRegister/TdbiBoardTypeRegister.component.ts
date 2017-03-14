import {Component, OnInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {CommonModule} from "@angular/common";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {TdbiBoardTypeRegisterService} from "./TdbiBoardTypeRegister.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {TdbiBoardType} from './TdbiBoardType.model';

import {DatatableComponent} from './datatable.component';
import {NotificationService} from "../../shared/utils/notification.service";


@FadeInTop()
@Component({
    selector: 'TdbiBoardTypeRegisterRetrieveComponent',
    templateUrl: 'TdbiBoardTypeRegister.component.html',
    providers: [TdbiBoardTypeRegisterService, TdbiBoardType]
})

export class TdbiBoardTypeRegisterComponent implements OnInit {

    retrieveCondDto = {
        boardTypeNo: "",
        xSocketQty: "",
        ySocketQty: "",
        tdbiBoardDescription: ""
    };

    constructor(private service: TdbiBoardTypeRegisterService, private notificationService: NotificationService, private tdbiBoardType: TdbiBoardType) {
    }

    @ViewChild('lgModal') bgModel;

    componentData = null;
    errorMessage = null;
    message: string = '';
    submitted = false;

    /**
     *
     */
    newData() {
        this.bgModel.show();
    }

    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler(info: any): void {
        this.message = info.boardTypeNo + ' - ' + info.xSocketQty + ' - ' + info.ySocketQty;

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.tdbiBoardType.boardTypeNo = info.boardTypeNo;
        this.tdbiBoardType.xSocketQty = info.xSocketQty;
        this.tdbiBoardType.ySocketQty = info.ySocketQty;

        this.service.postRetrieveByKey(this.tdbiBoardType)
            .subscribe((response) => {
                    //JSON 객체로 가져오는것을 this.programRegister 에 넣어야 한다.

                    this.tdbiBoardType = TdbiBoardType.fromJSON(response);
                },
                error => alert(error));

        this.bgModel.show(function (info: any) {
            console.log(info.boardTypeNo);
        });

    }

    saveLastTableForm() {
        console.log("boardTypeNo : " + this.tdbiBoardType.boardTypeNo);
        console.log("xSocketQty : " + this.tdbiBoardType.xSocketQty);
        console.log("ySocketQty : " + this.tdbiBoardType.ySocketQty);


        this.service.postRetrieve(this.retrieveCondDto)
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
                                    {data: 'tdbiBoardDescription'},
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
                this.service.save(this.tdbiBoardType).subscribe(
                    data => this.tdbiBoardType = data,
                    error => alert(error),
                    () => this.bgModel.hide());
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
