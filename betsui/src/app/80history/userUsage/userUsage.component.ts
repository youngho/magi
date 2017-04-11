import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';

import {UserUsageService} from "./userUsage.service";
import {UserUsage} from './userUsage.model';

@FadeInTop()
@Component({
    selector: 'userUsage',
    templateUrl: 'userUsage.component.html',
    providers: [UserUsageService, UserUsage]
})
export class UserUsageComponent {
    UIID: string = "BETS-UI-0803";

    constructor(private service: UserUsageService) {
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
    private data: UserUsage = new UserUsage();

    resetForm() {
        this.data = new UserUsage();
    }

    retrieveExecute() {
        // console.log("createDateStart : " + this.data.createDateStart);
        // console.log("createDateEnd : " + this.data.createDateEnd);
        // console.log("userId : " + this.data.userId);
        // console.log("uiId : " + this.data.uiId);

        this.service.postLastTable(this.data)
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
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: true, includeCellStyles: false }, this.startDate +"_"+this.endDate+'_yield'+'.xlsx');
    }

    ngOnInit() {
        // this.data.createDate = "20170321134000";
        this.data.userId = "youngho";
        this.data.uiId = this.UIID;
        this.service.postUsage(this.data).subscribe(
            data => this.data = data,
            error => alert(error),
            () => console.log("Finish onSave()")
        );
    }


}
