import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {CompoDutService} from "./compodut.service";
import {CompoDut} from "./compodut.model";

/**
 * 1. File name     : compodut.component.ts
 * 2. Discription   : BETS-UI-0302
 *                    Composite DUT Map
 *                    CASI_BIN 테이블의 DUT_MAIN_BIN 에 들어 있는 DUT의 정보를 BIN별로 분류하여 PASS BIN의 비율을 보여준다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'CompoDutBin',
    templateUrl: 'compodut.component.html',
    providers: [CompoDutService, CompoDut],
})
export class CompoDutComponent {
    UIID: string = "BETS-UI-0302";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: CompoDut = new CompoDut();
    private usageInfo = new UserUsage();
    public loading = false;

    constructor(private service: CompoDutService) {
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

    onGridLoaded() {
        var self = this;
        setTimeout(function () {
            self.flexGrid.autoSizeColumns();
        }, 300);
    }

    resetForm() {
        this.retrieveCondDto = new CompoDut();
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
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

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_CompositeDutMap' + '.xlsx');
    }
}
