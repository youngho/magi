import {Component, EventEmitter, Output, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {UserUsage} from "../../shared/usage/userUsage.model";

import {DutMapYieldService} from "./dutmapyield.service";
import {DutMapYield} from "./dutmapyield.model";

/**
 * 1. File name     : dutmapyield.component.ts
 * 2. Discription   : BETS-UI-0303
 *                    DUT Map Yiled
 *                    BIN Selection 이 정해지지 않을 경우에는 PASS BIN의 비율을 보여준다
 *                    BIN Selection 에서 선택한 BIN의 비율을 보여준다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'DutMapYield',
    templateUrl: 'dutmapyield.component.html',
    styles: ['select.input-sm {height: 20px;line-height: 20px;} label {margin-bottom: 0px;}'],
    providers: [DutMapYieldService, DutMapYield],
})
export class DutMapYieldComponent {
    UIID: string = "BETS-UI-0303";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    private colInfo = new Array();
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private retrieveCondDto: DutMapYield = new DutMapYield();
    private usageInfo = new UserUsage();
    binYieldLowerLimitReadonly: boolean = true; // INPUT 컨트롤 기본 ReadOnly
    binYieldUpperLimitReadonly: boolean = true; // INPUT 컨트롤 기본 ReadOnly
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: DutMapYieldService) {
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
        this.retrieveCondDto = new DutMapYield();
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        this.loading = true;
        this.retrieveCondDto.endTimeStart = this.startDate + "000000";
        this.retrieveCondDto.endTimeEnd = this.endDate + "999999";
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

    /**
     * BIN Selection 의 Change 이벤트에 따라 LowerLimit input 과 UpperLimit input 를 ReadOnly 처리한다
     * @param event
     */
    onBinSelectionChange(event: Event): void {
        // console.log("BIN Selection ::: " + this.retrieveCondDto.binSelection);
        if (Number(this.retrieveCondDto.binSelection) > 4) {
            this.retrieveCondDto.binYieldLowerLimit = "";
            this.binYieldLowerLimitReadonly = true;
            this.binYieldUpperLimitReadonly = false;
        } else if (0 < Number(this.retrieveCondDto.binSelection) && Number(this.retrieveCondDto.binSelection) < 5) {
            this.retrieveCondDto.binYieldUpperLimit = "";
            this.binYieldLowerLimitReadonly = false;
            this.binYieldUpperLimitReadonly = true;
        } else if (Number(this.retrieveCondDto.binSelection) == 0) {
            this.retrieveCondDto.binYieldLowerLimit = "";
            this.retrieveCondDto.binYieldUpperLimit = "";
            this.binYieldLowerLimitReadonly = true; // ReadOnly
            this.binYieldUpperLimitReadonly = true; // ReadOnly
        }
    }

    exportExcel() {
        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {includeColumnHeaders: true, includeCellStyles: false}, this.startDate + "_" + this.endDate + '_DutMapYield' + '.xlsx');
    }
}
