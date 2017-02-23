"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var smartadmin_module_1 = require("../../shared/smartadmin.module");
var forms_1 = require("@angular/forms");
var smartadmin_datatable_module_1 = require("../../shared/ui/datatable/smartadmin-datatable.module");
var dynamic_component_1 = require("./dynamic.component");
var singledut_component_1 = require("./singledut.component");
var singledut_routing_1 = require("./singledut.routing");
var datatable_component_1 = require("./datatable.component");
var smartadmin_input_module_1 = require("../../shared/forms/input/smartadmin-input.module");
var SubBinModule = (function () {
    function SubBinModule() {
    }
    SubBinModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                singledut_routing_1.SubBinRouting,
                smartadmin_module_1.SmartadminModule,
                smartadmin_input_module_1.SmartadminInputModule,
                smartadmin_datatable_module_1.SmartadminDatatableModule,
                // BETS ADDED
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [singledut_component_1.SubBinComponent, dynamic_component_1.DynamicComponent, datatable_component_1.DatatableComponent]
        })
    ], SubBinModule);
    return SubBinModule;
}());
exports.SubBinModule = SubBinModule;
