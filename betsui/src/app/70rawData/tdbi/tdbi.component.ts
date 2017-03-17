import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {TdbiService} from "./tdbi.service";

import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';
import {DynamicComponent} from './dynamic-component';
import {DatatableComponent} from './datatable.component';
import {RawData} from '../rawData.model';
import {NotificationService} from "../../shared/utils/notification.service";


@FadeInTop()
@Component({
    selector: 'NgBin',
    templateUrl: 'tdbi.component.html',
    providers: [TdbiService, RawData]
})
export class TdbiComponent implements OnInit {

    constructor(private service: TdbiService,private notificationService: NotificationService,) {
    }

    componentData = null;
    errorMessage = null;
    private retrieveCond: RawData = new RawData();
    private retrieveByKeyDto: RawData = new RawData();
    private colInfo = new Array();
    private Files: string[];

    onSelectDateFrom(strDate: string) {
        null != strDate ? this.retrieveCond.createDateStart = strDate + "000000" : this.retrieveCond.createDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        null != strDate ? this.retrieveCond.createDateEnd = strDate + "999999" : this.retrieveCond.createDateEnd = strDate;
    }
    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler(info: any): void {
        console.log(info.createDate);

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.retrieveByKeyDto.createDate = info.createDate;

        //알림 메시지를 보여준다.
        this.smartModEg1();
        // this.bgModel.show(function (info: any) {
        //     console.log(info.testerModel);
        // });

    }
    retrieveExecute() {
        console.log("endTimeStart : " + this.retrieveCond.createDateStart);
        console.log("createDateEnd : " + this.retrieveCond.createDateEnd);
        console.log("fileName : " + this.retrieveCond.fileName);

        this.service.retrievePost(this.retrieveCond)
            .subscribe((apps) => {
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                dom: 'Bfrtip',
                                fixedColumns: true,
                                colReorder: true,
                                // scrollX: true,
                                data: apps,
                                columns: [
                                    {data: 'location'},
                                    {data: 'fileName'},
                                    {data: 'createDate'},
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
                                    'colvis', 'copy', 'excel', 'pdf', 'print'
                                ]
                            }
                        }
                    };
                },
                error => this.errorMessage = error);
    }

    smartModEg1() {
        this.notificationService.smartMessageBox({
            title: "BETS Alert!",
            content: "Do you want to download file : " + this.retrieveByKeyDto.fileName,
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.service.postRetrieveByKey(this.retrieveByKeyDto).subscribe(
                    data => this.Files = data,
                    error => alert(error),
                    () => console.log(""));
            }
            if (ButtonPressed === "No") {
            }
        });
    }

    ngOnInit() {
    }


}
