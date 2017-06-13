﻿/*
    *
    * Wijmo Library 5.20171.300
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this && this.__extends || function()
{
var extendStatics=Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d, b)
{
d.__proto__ = b
} || function(d, b)
{
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p])
};
return function(d, b)
{
function __()
{
this.constructor = d
}
extendStatics(d, b);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
}
}();
define(["require", "exports", "wijmo/wijmo.grid.filter", "@angular/core", "@angular/core", "@angular/core", "@angular/common", "wijmo/wijmo.angular2.directiveBase"], function(require, exports, wjcGridFilter, core_1, core_2, core_3, common_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjFlexGridFilter,
moduleExports,
WjGridFilterModule;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.wjFlexGridFilterMeta = {
selector: 'wj-flex-grid-filter', template: "", inputs: ['wjProperty', 'showFilterIcons', 'showSortButtons', 'defaultFilterType', 'filterColumns', ], outputs: ['initialized', 'filterChangingNg: filterChanging', 'filterChangedNg: filterChanged', 'filterAppliedNg: filterApplied', ], providers: []
};
WjFlexGridFilter = function(_super)
{
function WjFlexGridFilter(elRef, injector, parentCmp)
{
var _this=_super.call(this, parentCmp) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.filterChangingNg = new core_1.EventEmitter(!1), _this.filterChangedNg = new core_1.EventEmitter(!1), _this.filterAppliedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjFlexGridFilter, _super), WjFlexGridFilter.prototype.created = function(){}, WjFlexGridFilter.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexGridFilter.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexGridFilter.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexGridFilter
}(wjcGridFilter.FlexGridFilter);
WjFlexGridFilter.meta = {outputs: exports.wjFlexGridFilterMeta.outputs};
WjFlexGridFilter.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexGridFilterMeta.selector, template: exports.wjFlexGridFilterMeta.template, inputs: exports.wjFlexGridFilterMeta.inputs, outputs: exports.wjFlexGridFilterMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexGridFilter
})
}].concat(exports.wjFlexGridFilterMeta.providers)
}, ]
}, ];
WjFlexGridFilter.ctorParameters = function()
{
return [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ]
};
exports.WjFlexGridFilter = WjFlexGridFilter;
moduleExports = [WjFlexGridFilter];
WjGridFilterModule = function()
{
function WjGridFilterModule(){}
return WjGridFilterModule
}();
WjGridFilterModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjGridFilterModule.ctorParameters = function()
{
return []
};
exports.WjGridFilterModule = WjGridFilterModule
})