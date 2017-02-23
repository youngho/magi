import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {TestLotCancelService} from "./testLotCancel.service";

import {TestLotCancel} from './testLotCancel.model';

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'TestLotCancel',
    templateUrl: 'testLotCancel.component.html',
    providers: [TestLotCancelService]
})
export class TestLotCancelComponent implements OnInit {

    componentData = null;
    errorMessage = null;

    data = {
        sysDate: "",
        sysDateStart: "",
        sysDateEnd: "",
        lotNumber: "",
        processName: "",
        partnumberName: "",
        programName: "",
        operatorName: "",
        testerName: "",
        testerNumber: "",
        testerHead: "",
        hdModel: "",
        hdTemp: "",
        boardId: "",
        line: "",
        site: "",
        lotType: "",
        retestCount: "",
        finalRetestCount: "",
        yield: "",
        simaxInqty: "",
        testCount: "",
        passCount: "",
        category01: "",
        category02: "",
        category03: "",
        category04: "",
        category05: "",
        category06: "",
        category07: "",
        category08: "",
        category09: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        executeDate: "",
        opInput: "",
        opCat1: "",
        opCat2: "",
        opCat3: "",
        opCat4: "",
        opCat5: "",
        opCat6: "",
        opCat7: "",
        opCat8: "",
        opCat9: "",
        sortInput: "",
        sort01: "",
        sort02: "",
        sort03: "",
        sort04: "",
        sort05: "",
        sort06: "",
        sort07: "",
        sort08: "",
        hdInput: "",
        hdCat1: "",
        hdCat2: "",
        hdCat3: "",
        hdCat4: "",
        hdCat5: "",
        hdCat6: "",
        hdCat7: "",
        hdCat8: "",
        cat61: "",
        cat62: "",
        cat63: "",
        cat64: "",
        cat65: "",
        cat71: "",
        cat72: "",
        cat73: "",
        cat74: "",
        cat75: "",
        revno: "",
        revnoEnd: "",
        lotin: "",
        lotout: "",
        subCnt1: "",
        subCnt2: "",
        finalSubCnt1: "",
        finalSubCnt2: "",
        ngCnt1: "",
        ngCnt2: "",
        finalNgCnt1: "",
        finalNgCnt2: "",
        subProgramName: "",
        initialBadBlock: "",
        finalBadBlock: "",
        gapIbbfbb: "",
        mLotList: "",
        recycleStep: "",
        recycleFlag: "",
        sblCode: "",
        sblJudge: "",
        mcNcfcode: "",
        ncfcodeSimax: "",
        ncacodeSimax: "",
        ncecodeSimax: "",
        ncqcodeSimax: "",
        nctcodeSimax: "",
        nchcodeSimax: "",
        ncmcodeSimax: "",
        ncpcodeSimax: "",
        ncscodeSimax: "",
        ncbcodeSimax: "",
        nckcodeSimax: "",
        ncrcodeSimax: "",
        dataFormat: "",
        sblCmd: "",
        runSblCode: "",
        runSblCmd: "",
        hOsA: "",
        hOsB: "",
        tOsOpsys: "",
        tOsAtl: "",
        tOsDiag: "",
        tOsSysos: "",
        tOsGpib: "",
        tIf: "",
        fsstFlag: "",
        lotAsysite: "",
        edsBadBlock: "",
        gapEbbfbb: "",
        frLot: "",
        subbin114: "",
        finalSubbin114: "",
        subbin115: "",
        finalSubbin115: "",
        subbin116: "",
        finalSubbin116: "",
        reworkFlag: "",
        testLine: "",
        purposeType: "",


    };

    constructor(private service: TestLotCancelService) {
        this.data.partnumberName = 'K9CFGY8U5A-CCK0000-HXBPHV';
        this.data.lotNumber = 'HJKD369Q';
        this.data.processName = 'T070000';
        this.data.testCount = '2146';
        this.data.testerName = 'T5375';
        this.data.testerHead = 'A';
    }

    saveLastTableForm() {
        console.log("sysDateStart : " + this.data.sysDateStart);
        console.log("sysDateEnd : " + this.data.sysDateEnd);
        console.log("partnumberName : " + this.data.partnumberName);
        console.log("lotNumber : " + this.data.lotNumber);
        console.log("processName : " + this.data.processName);
        console.log("testCount : " + this.data.testCount);
        console.log("testerName : " + this.data.testerName);
        console.log("testerHead : " + this.data.testerHead);

        this.service.postLastTable(this.data)
            .subscribe((apps) => {
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                colReorder: false,
                                data: apps,
                                columns: [
                                    {data: 'sysDate'},
                                    {data: 'partnumberName'},
                                    {data: 'lotNumber'},
                                    {data: 'processName'},
                                    {data: 'testCount'},
                                    {data: 'testerName'},
                                    {data: 'testerHead'},
                                    {data: 'boardId'},
                                    {data: 'category01'},
                                    {data: 'category02'},
                                    {data: 'category03'},
                                    {data: 'category04'},
                                    {data: 'category05'},
                                    {data: 'category06'},
                                    {data: 'category07'},
                                    {data: 'category08'},
                                    {data: 'category09'},
                                    ],
                                buttons: [
                                    'copy', 'excel', 'pdf', 'print'
                                ]
                            }
                        }
                    };
                },
                error => this.errorMessage = error);
    }

    ngOnInit() {
    }


}
