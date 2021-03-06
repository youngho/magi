import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";
import {NotificationService} from "../../shared/utils/notification.service";

import {ChipService} from "./chip.service";
import {RawData} from '../rawData.model';

declare var $: any;

/**
 * 1. File name     : chip.component.ts
 * 2. Discription   : CID 판별을 위해 만들어지는 파일들에 대한 조회 기능
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0703 : Chip RAW Data
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'casi',
    templateUrl: 'chip.component.html',
    providers: [ChipService, RawData]
})
export class ChipComponent {
    UIID: string = "BETS-UI-0703";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCond: RawData = new RawData();
    private retrieveByKeyDto: RawData = new RawData();
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner
    private Files: string[];

    constructor(private service: ChipService, private notificationService: NotificationService,) {
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

    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    download(flexGrid) {
        if (!this.flexGrid) {
            return;
        }
        let info: any
        info = flexGrid.selectedItems[0];

        console.log(info.createDate);
        console.log(info.fileName);

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.retrieveByKeyDto.createDate = info.createDate;
        this.retrieveByKeyDto.fileName = info.fileName;
        this.retrieveByKeyDto.location = info.location;
        this.retrieveByKeyDto.createDate = this.retrieveByKeyDto.createDate.replace(/:/g, "");
        this.retrieveByKeyDto.createDate = this.retrieveByKeyDto.createDate.replace(" ", "");
        this.retrieveByKeyDto.createDate = this.retrieveByKeyDto.createDate.replace(/-/g, "");
        //알림 메시지를 보여준다.
        this.smartModEg1();
        // this.bgModel.show(function (info: any) {
        //     console.log(info.testerModel);
        // });
    }

    retrieveExecute() {
        this.retrieveCond.createDateStart = this.startDate + "000000";
        this.retrieveCond.createDateEnd = this.endDate + "999999";
        this.retrieveCond.fileType = "CID";
        // console.log("endTimeStart : " + this.retrieveCond.createDateStart);
        // console.log("createDateEnd : " + this.retrieveCond.createDateEnd);
        // console.log("fileName : " + this.retrieveCond.fileName);
        this.loading = true;
        this.service.retrievePost(this.retrieveCond)
            .subscribe((apps) => {
                    this.loading = false;
                    this.gridData = new wjcCore.CollectionView(apps);
                    console.log(this.gridData);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        // this.stopRefreshing();
                    }
                },
                error => {
                    this.loading = false;
                    this.empty = true;
                    this.errorMessage = error;
                });
    }

    smartModEg1() {
        this.notificationService.smartMessageBox({
            title: "BETS Alert!",
            content: "Do you want to download file : " + this.retrieveByKeyDto.fileName,
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                var reader = new FileReader();
                this.service.postRetrieveByKey(this.retrieveByKeyDto).subscribe(
                    // data => console.log(data._body),
                    data => this.extractData(data._body),
                    error => alert(error),
                    () => console.log(""));
            }
            if (ButtonPressed === "No") {
            }
        });
    }

    extractData(res: string) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        // a.style = "display: none";
        // transforme response to blob
        // let myBlob: Blob = new Blob([res], {type: 'application/txt'}); // replace the type by whatever type is your response
        let myBlob: Blob = new Blob([res], {type: 'text/plain'}); // replace the type by whatever type is your response
        console.log("res : " + res);

        // var fileURL = URL.createObjectURL(myBlob);
        a.href = window.URL.createObjectURL(myBlob);
        a.download = this.retrieveByKeyDto.fileName;
        a.click();
        // window.URL.revokeObjectURL(myBlob);
        // Cross your fingers at this point and pray whatever you're used to pray
        // window.open(fileURL);
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_CIDRAWList' + '.xlsx');
    }

}
