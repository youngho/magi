import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {NotificationService} from "../../shared/utils/notification.service";
import {CasiService} from "./casi.service";
import {RawData} from '../rawData.model';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'NgBin',
    templateUrl: 'casi.component.html',
    providers: [CasiService, RawData]
})
export class CasiComponent {

    constructor(private service: CasiService,private notificationService: NotificationService,) {
    }

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
    private Files: string[];


    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler(info: any): void {
        console.log(info.createDate);
        console.log(info.fileName);

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.retrieveCond.createDate = info.createDate;
        this.retrieveCond.fileName = info.fileName;
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
            content: "Do you want to download file : " + this.retrieveCond.fileName,
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

    extractData(res: string){
        var a = document.createElement("a");
        document.body.appendChild(a);
        // a.style = "display: none";
        // transforme response to blob
        // let myBlob: Blob = new Blob([res], {type: 'application/txt'}); // replace the type by whatever type is your response
        let myBlob: Blob = new Blob([res], {type: 'text/plain'}); // replace the type by whatever type is your response
        console.log("res : " + res);

        // var fileURL = URL.createObjectURL(myBlob);
        a.href = window.URL.createObjectURL(myBlob);
        a.download = this.retrieveCond.fileName;
        a.click();
        // window.URL.revokeObjectURL(myBlob);
        // Cross your fingers at this point and pray whatever you're used to pray
        // window.open(fileURL);
    }
    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }

}
