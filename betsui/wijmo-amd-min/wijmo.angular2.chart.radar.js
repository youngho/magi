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
define(["require", "exports", "wijmo/wijmo.chart.radar", "@angular/core", "@angular/core", "@angular/core", "@angular/common", "@angular/forms", "wijmo/wijmo.angular2.directiveBase"], function(require, exports, wjcChartRadar, core_1, core_2, core_3, common_1, forms_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjFlexRadar,
WjFlexRadarAxis,
WjFlexRadarSeries,
moduleExports,
WjChartRadarModule;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.wjFlexRadarMeta = {
selector: 'wj-flex-radar', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'binding', 'footer', 'header', 'selectionMode', 'palette', 'plotMargin', 'footerStyle', 'headerStyle', 'tooltipContent', 'itemsSource', 'bindingX', 'interpolateNulls', 'legendToggle', 'symbolSize', 'options', 'selection', 'itemFormatter', 'labelContent', 'chartType', 'startAngle', 'totalAngle', 'reversed', 'stacking', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'renderingNg: rendering', 'renderedNg: rendered', 'selectionChangedNg: selectionChanged', 'selectionChangePC: selectionChange', 'seriesVisibilityChangedNg: seriesVisibilityChanged', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjFlexRadar = function(_super)
{
function WjFlexRadar(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.renderingNg = new core_1.EventEmitter(!1), _this.renderedNg = new core_1.EventEmitter(!1), _this.selectionChangedNg = new core_1.EventEmitter(!1), _this.selectionChangePC = new core_1.EventEmitter(!1), _this.seriesVisibilityChangedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjFlexRadar, _super), WjFlexRadar.prototype.created = function(){}, WjFlexRadar.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexRadar.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexRadar.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, Object.defineProperty(WjFlexRadar.prototype, "tooltipContent", {
get: function()
{
return this.tooltip.content
}, set: function(value)
{
this.tooltip.content = value
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjFlexRadar.prototype, "labelContent", {
get: function()
{
return this.dataLabel.content
}, set: function(value)
{
this.dataLabel.content = value
}, enumerable: !0, configurable: !0
}), WjFlexRadar
}(wjcChartRadar.FlexRadar);
WjFlexRadar.meta = {
outputs: exports.wjFlexRadarMeta.outputs, changeEvents: {selectionChanged: ['selection']}
};
WjFlexRadar.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexRadarMeta.selector, template: exports.wjFlexRadarMeta.template, inputs: exports.wjFlexRadarMeta.inputs, outputs: exports.wjFlexRadarMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexRadar
})
}].concat(exports.wjFlexRadarMeta.providers)
}, ]
}, ];
WjFlexRadar.ctorParameters = function()
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
exports.WjFlexRadar = WjFlexRadar;
exports.wjFlexRadarAxisMeta = {
selector: 'wj-flex-radar-axis', template: "", inputs: ['wjProperty', 'axisLine', 'format', 'labels', 'majorGrid', 'majorTickMarks', 'majorUnit', 'max', 'min', 'position', 'reversed', 'title', 'labelAngle', 'minorGrid', 'minorTickMarks', 'minorUnit', 'origin', 'logBase', 'plotArea', 'labelAlign', 'name', 'overlappingLabels', 'labelPadding', 'itemFormatter', 'itemsSource', 'binding', ], outputs: ['initialized', 'rangeChangedNg: rangeChanged', ], providers: []
};
WjFlexRadarAxis = function(_super)
{
function WjFlexRadarAxis(elRef, injector, parentCmp)
{
var _this=_super.call(this) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjProperty = 'axes', _this.rangeChangedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjFlexRadarAxis, _super), WjFlexRadarAxis.prototype.created = function(){}, WjFlexRadarAxis.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexRadarAxis.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexRadarAxis.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexRadarAxis
}(wjcChartRadar.FlexRadarAxis);
WjFlexRadarAxis.meta = {outputs: exports.wjFlexRadarAxisMeta.outputs};
WjFlexRadarAxis.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexRadarAxisMeta.selector, template: exports.wjFlexRadarAxisMeta.template, inputs: exports.wjFlexRadarAxisMeta.inputs, outputs: exports.wjFlexRadarAxisMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexRadarAxis
})
}].concat(exports.wjFlexRadarAxisMeta.providers)
}, ]
}, ];
WjFlexRadarAxis.ctorParameters = function()
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
exports.WjFlexRadarAxis = WjFlexRadarAxis;
exports.wjFlexRadarSeriesMeta = {
selector: 'wj-flex-radar-series', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'chartType', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
};
WjFlexRadarSeries = function(_super)
{
function WjFlexRadarSeries(elRef, injector, parentCmp)
{
var _this=_super.call(this) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjProperty = 'series', _this.renderingNg = new core_1.EventEmitter(!1), _this.renderedNg = new core_1.EventEmitter(!1), _this.visibilityChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjFlexRadarSeries, _super), WjFlexRadarSeries.prototype.created = function(){}, WjFlexRadarSeries.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexRadarSeries.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexRadarSeries.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexRadarSeries
}(wjcChartRadar.FlexRadarSeries);
WjFlexRadarSeries.meta = {
outputs: exports.wjFlexRadarSeriesMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
};
WjFlexRadarSeries.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexRadarSeriesMeta.selector, template: exports.wjFlexRadarSeriesMeta.template, inputs: exports.wjFlexRadarSeriesMeta.inputs, outputs: exports.wjFlexRadarSeriesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexRadarSeries
})
}].concat(exports.wjFlexRadarSeriesMeta.providers)
}, ]
}, ];
WjFlexRadarSeries.ctorParameters = function()
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
exports.WjFlexRadarSeries = WjFlexRadarSeries;
moduleExports = [WjFlexRadar, WjFlexRadarAxis, WjFlexRadarSeries];
WjChartRadarModule = function()
{
function WjChartRadarModule(){}
return WjChartRadarModule
}();
WjChartRadarModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjChartRadarModule.ctorParameters = function()
{
return []
};
exports.WjChartRadarModule = WjChartRadarModule
})