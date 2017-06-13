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
define(["require", "exports", "wijmo/wijmo.chart.finance", "@angular/core", "@angular/core", "@angular/core", "@angular/common", "@angular/forms", "wijmo/wijmo.angular2.directiveBase"], function(require, exports, wjcChartFinance, core_1, core_2, core_3, common_1, forms_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjFinancialChart,
WjFinancialChartSeries,
moduleExports,
WjChartFinanceModule;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.wjFinancialChartMeta = {
selector: 'wj-financial-chart', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'binding', 'footer', 'header', 'selectionMode', 'palette', 'plotMargin', 'footerStyle', 'headerStyle', 'tooltipContent', 'itemsSource', 'bindingX', 'interpolateNulls', 'legendToggle', 'symbolSize', 'options', 'selection', 'itemFormatter', 'labelContent', 'chartType', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'renderingNg: rendering', 'renderedNg: rendered', 'selectionChangedNg: selectionChanged', 'selectionChangePC: selectionChange', 'seriesVisibilityChangedNg: seriesVisibilityChanged', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjFinancialChart = function(_super)
{
function WjFinancialChart(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.renderingNg = new core_1.EventEmitter(!1), _this.renderedNg = new core_1.EventEmitter(!1), _this.selectionChangedNg = new core_1.EventEmitter(!1), _this.selectionChangePC = new core_1.EventEmitter(!1), _this.seriesVisibilityChangedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjFinancialChart, _super), WjFinancialChart.prototype.created = function(){}, WjFinancialChart.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFinancialChart.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFinancialChart.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, Object.defineProperty(WjFinancialChart.prototype, "tooltipContent", {
get: function()
{
return this.tooltip.content
}, set: function(value)
{
this.tooltip.content = value
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjFinancialChart.prototype, "labelContent", {
get: function()
{
return this.dataLabel.content
}, set: function(value)
{
this.dataLabel.content = value
}, enumerable: !0, configurable: !0
}), WjFinancialChart
}(wjcChartFinance.FinancialChart);
WjFinancialChart.meta = {
outputs: exports.wjFinancialChartMeta.outputs, changeEvents: {selectionChanged: ['selection']}
};
WjFinancialChart.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFinancialChartMeta.selector, template: exports.wjFinancialChartMeta.template, inputs: exports.wjFinancialChartMeta.inputs, outputs: exports.wjFinancialChartMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFinancialChart
})
}].concat(exports.wjFinancialChartMeta.providers)
}, ]
}, ];
WjFinancialChart.ctorParameters = function()
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
exports.WjFinancialChart = WjFinancialChart;
exports.wjFinancialChartSeriesMeta = {
selector: 'wj-financial-chart-series', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'chartType', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFinancialChartSeries = function(_super)
{
function WjFinancialChartSeries(elRef, injector, parentCmp)
{
var _this=_super.call(this) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjProperty = 'series', _this.renderingNg = new core_1.EventEmitter(!1), _this.renderedNg = new core_1.EventEmitter(!1), _this.visibilityChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjFinancialChartSeries, _super), WjFinancialChartSeries.prototype.created = function(){}, WjFinancialChartSeries.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFinancialChartSeries.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFinancialChartSeries.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFinancialChartSeries
}(wjcChartFinance.FinancialSeries);
WjFinancialChartSeries.meta = {
outputs: exports.wjFinancialChartSeriesMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
};
WjFinancialChartSeries.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFinancialChartSeriesMeta.selector, template: exports.wjFinancialChartSeriesMeta.template, inputs: exports.wjFinancialChartSeriesMeta.inputs, outputs: exports.wjFinancialChartSeriesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFinancialChartSeries
})
}].concat(exports.wjFinancialChartSeriesMeta.providers)
}, ]
}, ];
WjFinancialChartSeries.ctorParameters = function()
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
exports.WjFinancialChartSeries = WjFinancialChartSeries;
moduleExports = [WjFinancialChart, WjFinancialChartSeries];
WjChartFinanceModule = function()
{
function WjChartFinanceModule(){}
return WjChartFinanceModule
}();
WjChartFinanceModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjChartFinanceModule.ctorParameters = function()
{
return []
};
exports.WjChartFinanceModule = WjChartFinanceModule
})