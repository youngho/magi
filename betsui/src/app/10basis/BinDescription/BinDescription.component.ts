import {Component, OnInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {BinDescriptionService} from "./BinDescription.service";

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {BinDescription} from './BinDescription.model';

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';
import {NotificationService} from "../../shared/utils/notification.service";

@FadeInTop()
@Component({
    selector: 'BinDescriptionComponent',
    templateUrl: 'BinDescription.component.html',
    providers: [BinDescriptionService, BinDescription]
})
export class BinDescriptionComponent implements OnInit {

    constructor(private service: BinDescriptionService, private notificationService: NotificationService, private binDescription: BinDescription) {
    }

    @ViewChild('lgModal') bgModel;

    message: string = '';
    submitted = false;
    componentData = null;
    errorMessage = null;

    retrieveCondDto = {
        partNumber: "",
        mainProgramName: "",
        processCode: "",
        testerModel: "",
        itemName: "",
        mainBin: "",
        subBin: "",
        ngBin: "",
    };


    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler(info: any): void {
        this.message = info.partNumber + ' - ' + info.mainProgramName + ' - ' + info.processCode;

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.binDescription.partNumber = info.partNumber;
        this.binDescription.mainProgramName = info.mainProgramName;
        this.binDescription.processCode = info.processCode;
        this.binDescription.testerModel = info.testerModel;

        this.service.postRetrieveByKey(this.binDescription)
            .subscribe((response) => {
                    //JSON 객체로 가져오는것을 this.programRegister 에 넣어야 한다.

                    this.binDescription = BinDescription.fromJSON(response);
                },
                error => alert(error));

        this.bgModel.show(function (info: any) {
            console.log(info.partNumber);
        });

    }

    resetForm(){
        this.retrieveCondDto.partNumber = null;
        this.retrieveCondDto.mainProgramName = null;
        this.retrieveCondDto.processCode = null;
        this.retrieveCondDto.testerModel = null;
        this.retrieveCondDto.itemName = null;
        this.retrieveCondDto.mainBin = null;
        this.retrieveCondDto.subBin = null;
        this.retrieveCondDto.ngBin = null;
    }

    saveLastTableForm() {
        console.log("partNumber : " + this.retrieveCondDto.partNumber);
        console.log("mainProgramName : " + this.retrieveCondDto.mainProgramName);
        console.log("processCode : " + this.retrieveCondDto.processCode);
        console.log("testerModel : " + this.retrieveCondDto.testerModel);


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
                                    {data: 'partNumber'},
                                    {data: 'mainProgramName'},
                                    {data: 'processCode'},
                                    {data: 'testerModel'},

                                    {data: 'itemName'},
                                    {data: 'mainBin'},
                                    {data: 'subBin'},
                                    {data: 'ngBin'},
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
                this.service.save(this.binDescription).subscribe(
                    data => this.binDescription = data,
                    error => alert(error),
                    () => this.bgModel.hide());
            }
            if (ButtonPressed === "No") {

            }
        });
    }

    ngOnInit() {
    }
}
