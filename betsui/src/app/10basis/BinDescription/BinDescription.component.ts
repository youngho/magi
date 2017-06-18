import {Component, OnInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {NotificationService} from "../../shared/utils/notification.service";

import {BinDescriptionService} from "./BinDescription.service";
import {BinDescription} from './BinDescription.model';
import {UserUsage} from "../../shared/usage/userUsage.model";

/**
 * 1. File name     : BinDescription.component.ts
 * 2. Discription   : BIN 에 대한 설명을 관리한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'BinDescriptionComponent',
    templateUrl: 'BinDescription.component.html',
    providers: [BinDescriptionService, BinDescription, UserUsage]
})
/**
 *
 */
export class BinDescriptionComponent implements OnInit{

    constructor(private service: BinDescriptionService, private notificationService: NotificationService, private binDescription: BinDescription) {
    }

    @ViewChild('lgModal') bgModel;

    UIID: string = "BETS-UI-0103";
    message: string = '';
    submitted = false;
    componentData = null;
    errorMessage = null;
    startDate = "";
    endDate = "";
    empty = true;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner

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
     * 리스트 클릭시에 호출되는 함수로 팝업창(bgModel)을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    editByKye(flexGrid){
        if (!this.flexGrid) {
            return;
        }
        let info: any
        info = flexGrid.selectedItems[0];
        console.log(info.createDate);

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
        this.retrieveCondDto.ngBin = null
        this.gridData = null;
    }

    retrieveExecute() {
        // console.log("partNumber : " + this.retrieveCondDto.partNumber);
        // console.log("mainProgramName : " + this.retrieveCondDto.mainProgramName);
        // console.log("processCode : " + this.retrieveCondDto.processCode);
        // console.log("testerModel : " + this.retrieveCondDto.testerModel);

        this.loading = true;
        this.service.postRetrieve(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.loading = false;
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                },
                error => {
                    this.loading = false;
                    this.errorMessage = error;
                });
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

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_BinDescription'+'.xlsx');
    }

    ngOnInit() {
        // this.data.createDate = It makes server side service class
        this.usageInfo.userId = localStorage.getItem("loginId");
        this.usageInfo.uiId = this.UIID;
        this.service.postUsage(this.usageInfo).subscribe(
            data => this.usageInfo = data,
            error => alert(error),
            () => console.log("Finish onSave()")
        );
    }
}
