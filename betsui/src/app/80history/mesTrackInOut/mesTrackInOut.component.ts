import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {MesTrackInOutService} from "./mesTrackInOut.service";
import {MesTrackInOut} from './mesTrackInOut.model';

/**
 * 1. File name     : mesTrackInOut.component.ts
 * 2. Discription   : Process 로직에서 MES와 통신한 이력을 보여주는 화면이다.
 * 3. writer        : yhkim     2017.02.17
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0802 : Mes Track In Out
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'testMesTrackInOut',
    templateUrl: 'mesTrackInOut.component.html',
    providers: [MesTrackInOutService, MesTrackInOut]
})
export class MesTrackInOutComponent {
    UIID: string = "BETS-UI-0802";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: MesTrackInOut = new MesTrackInOut();
    private usageInfo = new UserUsage();
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: MesTrackInOutService) {
    }

    ngOnInit() {
        // this.data.createDate = It makes server side service class
        this.usageInfo.userId = localStorage.getItem("loginId");
        this.usageInfo.uiId = this.UIID;
        this.service.postUsage(this.usageInfo).subscribe(
            data => this.usageInfo = data,
            error => alert(error),
            // () => console.log("Finish onSave()")
        );
    }

    resetForm() {
        this.retrieveCondDto = new MesTrackInOut();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        // console.log("endTimeStart : " + this.data.createDateStart);
        // console.log("createDateEnd : " + this.data.createDateEnd);
        // console.log("partNumber : " + this.data.partNumber);
        // console.log("processCode : " + this.data.processCode);
        // console.log("testerModel : " + this.data.testerModel);

        this.retrieveCondDto.createDateStart = this.startDate + "000000";
        this.retrieveCondDto.createDateEnd = this.endDate + "999999";
        this.loading = true;
        this.service.postLastTable(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.loading = false;              // 데이터 조회중 표시 기능 여부
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                },
                error => {
                    this.loading = false;
                    this.empty = true;
                    this.errorMessage = error;
                });
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_mesTrackInOut'+'.xlsx');
    }
}
