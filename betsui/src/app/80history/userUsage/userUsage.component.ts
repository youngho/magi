import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';

import {UserUsageService} from "./userUsage.service";
import {UserUsage} from "../../shared/usage/userUsage.model";

/**
 * 1. File name     : userUsage.component.ts
 * 2. Discription   : 사용자 이력화면이다. 사용자 이력정보는 각 화면이 Init되는 시점에 UserUsage 서비스를 호출하여 자신의 화면 아이디를 시간과 함께 저장한다. 이렇게 저장된 내역을 조회하는 화면이다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0803 : Test Program Revision
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'userUsage',
    templateUrl: 'userUsage.component.html',
    providers: [UserUsageService]
})
export class UserUsageComponent {
    UIID: string = "BETS-UI-0803";
    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private usageInfo: UserUsage = new UserUsage();
    public loading = false; // Control for Grid Table Spinner

    retrieveCondDto = {
        createDateStart: "",
        createDateEnd: "",
        userId: "",
        uiId: "",
    };
    constructor(private service: UserUsageService) {
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
        this.retrieveCondDto.createDateStart = "";
        this.retrieveCondDto.createDateEnd = "";
        this.retrieveCondDto.userId = "";
        this.retrieveCondDto.uiId = "";
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        // console.log("createDateStart : " + this.data.createDateStart);
        // console.log("createDateEnd : " + this.data.createDateEnd);
        // console.log("userId : " + this.data.userId);
        // console.log("uiId : " + this.data.uiId);
        this.retrieveCondDto.createDateStart = this.startDate + "000000";
        this.retrieveCondDto.createDateEnd = this.endDate + "999999";
        this.loading = true;
        this.service.postRetrieve(this.retrieveCondDto)
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_userUsage'+'.xlsx');
    }
}