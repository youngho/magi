import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";
import {NotificationService} from "../../shared/utils/notification.service";

import {TdbiService} from "./tdbi.service";
import {RawData} from '../rawData.model';


@FadeInTop()
@Component({
    selector: 'NgBin',
    templateUrl: 'tdbi.component.html',
    providers: [TdbiService, RawData]
})
export class TdbiComponent {
    UIID: string = "BETS-UI-0702";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCond: RawData = new RawData();
    private retrieveByKeyDto: RawData = new RawData();
    private usageInfo = new UserUsage();
    private Files: string[];

    constructor(private service: TdbiService,private notificationService: NotificationService,) {
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

    onGridLoaded(){
        var self = this;
        setTimeout(function() {
            self.flexGrid.autoSizeColumns();
        },300);
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
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        // this.stopRefreshing();
                    }
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
    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }
}
