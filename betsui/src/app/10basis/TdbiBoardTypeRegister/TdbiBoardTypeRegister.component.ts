import {Component, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {NotificationService} from "../../shared/utils/notification.service";
import {UserUsage} from "../../shared/usage/userUsage.model";

import {TdbiBoardTypeRegisterService} from "./TdbiBoardTypeRegister.service";
import {TdbiBoardType} from './TdbiBoardType.model';

@FadeInTop()
@Component({
    selector: 'TdbiBoardTypeRegisterRetrieveComponent',
    templateUrl: 'TdbiBoardTypeRegister.component.html',
    providers: [TdbiBoardTypeRegisterService, TdbiBoardType, UserUsage]
})

export class TdbiBoardTypeRegisterComponent {
    UIID: string = "BETS-UI-0104";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    submitted = false;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    @ViewChild('lgModal') bgModel;
    retrieveCondDto = {
        boardTypeNo: "",
        xSocketQty: "",
        ySocketQty: "",
        tdbiBoardTypeDescription: ""
    };
    private usageInfo = new UserUsage();

    constructor(private service: TdbiBoardTypeRegisterService, private notificationService: NotificationService, private tdbiBoardType: TdbiBoardType) {
    }

    ngOnInit() {
        // this.data.createDate = It makes server side service class
        this.usageInfo.userId = localStorage.getItem("username");
        this.usageInfo.uiId = this.UIID;
        this.service.postUsage(this.usageInfo).subscribe(
            data => this.usageInfo = data,
            error => alert(error),
            () => console.log("Finish onSave()")
        );
    }
    /**
     *
     */
    newData() {
        this.bgModel.show();
    }

    resetForm() {
        this.retrieveCondDto = new TdbiBoardType();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
    }

    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    editByKye(flexGrid){
        if (!this.flexGrid) {
            return;
        }
        let info: any
        info = flexGrid.selectedItems[0];
        console.log(info.createDate);

        //this.message = info.boardTypeNo + ' - ' + info.xSocketQty + ' - ' + info.ySocketQty;

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.tdbiBoardType.boardTypeNo = info.boardTypeNo;
        this.tdbiBoardType.xSocketQty = info.xSocketQty;
        this.tdbiBoardType.ySocketQty = info.ySocketQty;

        this.service.postRetrieveByKey(this.tdbiBoardType)
            .subscribe((response) => {
                   this.tdbiBoardType = TdbiBoardType.fromJSON(response);
                },
                error => alert(error));

        this.bgModel.show(function (info: any) {
            console.log(info.boardTypeNo);
        });

    }

    retrieveExecute() {
        console.log("boardTypeNo : " + this.tdbiBoardType.boardTypeNo);
        console.log("xSocketQty : " + this.tdbiBoardType.xSocketQty);
        console.log("ySocketQty : " + this.tdbiBoardType.ySocketQty);

        this.service.postRetrieve(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                },
                error => this.errorMessage = error);
    }

    saveForm() {
        this.smartModEg1();
        this.submitted = true;
    }

    onGridLoaded(){
        var self = this;
        setTimeout(function() {
            self.flexGrid.autoSizeColumns();
        },300);
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

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_tdbi'+'.xlsx');
    }
}
