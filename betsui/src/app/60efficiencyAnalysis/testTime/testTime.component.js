"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var fade_in_top_decorator_1 = require("../../shared/animations/fade-in-top.decorator");
var testProgramRevision_service_1 = require("./testProgramRevision.service");
var datatable_component_1 = require('./datatable.component');
var testProgramRevision_model_1 = require('./testProgramRevision.model');
var ProgramRevisionComponent = (function () {
    function ProgramRevisionComponent(service) {
        this.service = service;
        this.componentData = null;
        this.errorMessage = null;
        this.data = new testProgramRevision_model_1.ProgramRevision();
        this.colInfo = new Array();
    }
    ProgramRevisionComponent.prototype.onSelectDateFrom = function (strDate) {
        null != strDate ? this.data.createDateStart = strDate + "000000" : this.data.createDateStart = strDate;
    };
    ProgramRevisionComponent.prototype.onSelectDateTo = function (strDate) {
        null != strDate ? this.data.createDateEnd = strDate + "999999" : this.data.createDateEnd = strDate;
    };
    ProgramRevisionComponent.prototype.saveLastTableForm = function () {
        var _this = this;
        console.log("endTimeStart : " + this.data.createDateStart);
        console.log("createDateEnd : " + this.data.createDateEnd);
        console.log("partNumber : " + this.data.partNumber);
        console.log("processCode : " + this.data.processCode);
        console.log("testerModel : " + this.data.testerModel);
        this.service.postLastTable(this.data)
            .subscribe(function (apps) {
            console.log(apps);
            //debugger;
            _this.colInfo = [];
            var tempStr;
            var apps_obj = apps[0];
            if (apps_obj != null) {
                for (var key in apps_obj) {
                    // var value = key;
                    //console.log("===>" + value)
                    tempStr = { "title": key, "data": key };
                    _this.colInfo.push(tempStr);
                }
            }
            else {
                // 컬럼을 동적으로 만들경우 DB에서 0건으로 검색되면 컬럼명도 가져오지 못한다.
                // 때문에 임의의 컬럼명을 만들어서 테이블을 그린다. 이때 데이터가 없어 'No data available in table' 메시지가 표시된다.
                console.log("columns return 0");
                _this.colInfo.push({ "title": "No Data", "data": "noData" });
            }
            _this.componentData = {
                component: datatable_component_1.DatatableComponent,
                inputs: {
                    options: {
                        dom: 'Bfrtip',
                        fixedColumns: true,
                        colReorder: true,
                        scrollX: true,
                        data: apps,
                        columns: _this.colInfo,
                        buttons: [
                            'colvis', 'copy', 'excel', 'pdf', 'print'
                        ]
                    }
                }
            };
        }, function (error) { return _this.errorMessage = error; });
    };
    ProgramRevisionComponent.prototype.ngOnInit = function () {
    };
    ProgramRevisionComponent = __decorate([
        fade_in_top_decorator_1.FadeInTop(),
        core_1.Component({
            selector: 'testProgramRevision',
            templateUrl: 'testTime.component.html',
            providers: [testProgramRevision_service_1.ProgramRevisionService, testProgramRevision_model_1.ProgramRevision]
        })
    ], ProgramRevisionComponent);
    return ProgramRevisionComponent;
}());
exports.ProgramRevisionComponent = ProgramRevisionComponent;
