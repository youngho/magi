import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';

import {UserUsageService} from "./userUsage.service";
import {UserUsage} from "../../shared/usage/userUsage.model";

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
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private usageInfo: UserUsage = new UserUsage();

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
            () => console.log("Finish onSave()")
        );
    }

    resetForm() {
        this.retrieveCondDto.createDateStart = "";
        this.retrieveCondDto.createDateEnd = "";
        this.retrieveCondDto.userId = "";
        this.retrieveCondDto.uiId = "";
    }

    retrieveExecute() {
        // console.log("createDateStart : " + this.data.createDateStart);
        // console.log("createDateEnd : " + this.data.createDateEnd);
        // console.log("userId : " + this.data.userId);
        // console.log("uiId : " + this.data.uiId);

        this.service.postRetrieve(this.retrieveCondDto)
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

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_userUsage'+'.xlsx');
    }
}