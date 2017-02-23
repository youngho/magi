"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var subbin_service_1 = require("./subbin.service");
var datatable_component_1 = require('./datatable.component');
var SubBinComponent = (function () {
    function SubBinComponent(service) {
        this.service = service;
        this.componentData = null;
        this.errorMessage = null;
        this.data = {
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
        this.data.partnumberName = 'K9CFGY8U5A-CCK0000-HXBPHV';
        this.data.lotNumber = 'HJKD369Q';
        this.data.processName = 'T070000';
        this.data.testCount = '2146';
        this.data.testerName = 'T5375';
        this.data.testerHead = 'A';
    }
    SubBinComponent.prototype.saveLastTableForm = function () {
        var _this = this;
        console.log("sysDateStart : " + this.data.sysDateStart);
        console.log("sysDateEnd : " + this.data.sysDateEnd);
        console.log("partnumberName : " + this.data.partnumberName);
        console.log("lotNumber : " + this.data.lotNumber);
        console.log("processName : " + this.data.processName);
        console.log("testCount : " + this.data.testCount);
        console.log("testerName : " + this.data.testerName);
        console.log("testerHead : " + this.data.testerHead);
        this.service.postLastTable(this.data)
            .subscribe(function (apps) {
            _this.componentData = {
                component: datatable_component_1.DatatableComponent,
                inputs: {
                    options: {
                        colReorder: false,
                        data: apps,
                        columns: [
                            { data: 'sysDate' },
                            { data: 'partnumberName' },
                            { data: 'lotNumber' },
                            { data: 'processName' },
                            { data: 'testCount' },
                            { data: 'testerName' },
                            { data: 'testerHead' },
                            { data: 'boardId' },
                            { data: 'category01' },
                            { data: 'category02' },
                            { data: 'category03' },
                            { data: 'category04' },
                            { data: 'category05' },
                            { data: 'category06' },
                            { data: 'category07' },
                            { data: 'category08' },
                            { data: 'category09' },
                        ],
                        buttons: [
                            'copy', 'excel', 'pdf', 'print'
                        ]
                    }
                }
            };
        }, function (error) { return _this.errorMessage = error; });
    };
    SubBinComponent.prototype.ngOnInit = function () {
    };
    SubBinComponent = __decorate([
        fade_in_top_decorator_1.FadeInTop(),
        core_1.Component({
            selector: 'NgBin',
            templateUrl: 'singledut.component.html',
            providers: [subbin_service_1.SubBinService]
        })
    ], SubBinComponent);
    return SubBinComponent;
}());
exports.SubBinComponent = SubBinComponent;
