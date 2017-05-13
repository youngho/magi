import {Component, OnInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {TestEfficiencyService} from "./testEfficiency.service";
import {TestEfficiency} from './testEfficiency.model';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'testEfficiency',
    templateUrl: 'testEfficiency.component.html',
    providers: [TestEfficiencyService, TestEfficiency]
})
export class TestEfficiencyComponent implements OnInit {
    UIID: string = "BETS-UI-0601";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: TestEfficiency = new TestEfficiency();
    private usageInfo = new UserUsage();

    constructor(private service: TestEfficiencyService) {
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
        this.retrieveCondDto = new TestEfficiency();
        this.stopRefreshing();
        this.gridData = null;
    }

    retrieveExecute() {
        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
        this.service.postRetrieve(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        this.stopRefreshing();
                    }
                },
                error => this.errorMessage = error
            );
    }

    private stopRefreshing() {
        this.isRequesting = false;
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_TestEfficiency' + '.xlsx');
    }




}
