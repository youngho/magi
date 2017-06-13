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
define(["require", "exports", "wijmo/wijmo.gauge", "@angular/core", "@angular/core", "@angular/core", "@angular/common", "@angular/forms", "wijmo/wijmo.angular2.directiveBase"], function(require, exports, wjcGauge, core_1, core_2, core_3, common_1, forms_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjLinearGauge,
WjBulletGraph,
WjRadialGauge,
WjRange,
moduleExports,
WjGaugeModule;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.wjLinearGaugeMeta = {
selector: 'wj-linear-gauge', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'value', 'min', 'max', 'origin', 'isReadOnly', 'step', 'format', 'thickness', 'hasShadow', 'isAnimated', 'showText', 'showTicks', 'showRanges', 'thumbSize', 'tickSpacing', 'getText', 'direction', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjLinearGauge = function(_super)
{
function WjLinearGauge(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjLinearGauge, _super), WjLinearGauge.prototype.created = function(){}, WjLinearGauge.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjLinearGauge.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjLinearGauge.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjLinearGauge
}(wjcGauge.LinearGauge);
WjLinearGauge.meta = {
outputs: exports.wjLinearGaugeMeta.outputs, changeEvents: {valueChanged: ['value']}
};
WjLinearGauge.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjLinearGaugeMeta.selector, template: exports.wjLinearGaugeMeta.template, inputs: exports.wjLinearGaugeMeta.inputs, outputs: exports.wjLinearGaugeMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjLinearGauge
})
}].concat(exports.wjLinearGaugeMeta.providers)
}, ]
}, ];
WjLinearGauge.ctorParameters = function()
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
exports.WjLinearGauge = WjLinearGauge;
exports.wjBulletGraphMeta = {
selector: 'wj-bullet-graph', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'value', 'min', 'max', 'origin', 'isReadOnly', 'step', 'format', 'thickness', 'hasShadow', 'isAnimated', 'showText', 'showTicks', 'showRanges', 'thumbSize', 'tickSpacing', 'getText', 'direction', 'target', 'good', 'bad', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjBulletGraph = function(_super)
{
function WjBulletGraph(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjBulletGraph, _super), WjBulletGraph.prototype.created = function(){}, WjBulletGraph.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjBulletGraph.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjBulletGraph.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjBulletGraph
}(wjcGauge.BulletGraph);
WjBulletGraph.meta = {
outputs: exports.wjBulletGraphMeta.outputs, changeEvents: {valueChanged: ['value']}
};
WjBulletGraph.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjBulletGraphMeta.selector, template: exports.wjBulletGraphMeta.template, inputs: exports.wjBulletGraphMeta.inputs, outputs: exports.wjBulletGraphMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjBulletGraph
})
}].concat(exports.wjBulletGraphMeta.providers)
}, ]
}, ];
WjBulletGraph.ctorParameters = function()
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
exports.WjBulletGraph = WjBulletGraph;
exports.wjRadialGaugeMeta = {
selector: 'wj-radial-gauge', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'value', 'min', 'max', 'origin', 'isReadOnly', 'step', 'format', 'thickness', 'hasShadow', 'isAnimated', 'showText', 'showTicks', 'showRanges', 'thumbSize', 'tickSpacing', 'getText', 'autoScale', 'startAngle', 'sweepAngle', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjRadialGauge = function(_super)
{
function WjRadialGauge(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjRadialGauge, _super), WjRadialGauge.prototype.created = function(){}, WjRadialGauge.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjRadialGauge.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjRadialGauge.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjRadialGauge
}(wjcGauge.RadialGauge);
WjRadialGauge.meta = {
outputs: exports.wjRadialGaugeMeta.outputs, changeEvents: {valueChanged: ['value']}
};
WjRadialGauge.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjRadialGaugeMeta.selector, template: exports.wjRadialGaugeMeta.template, inputs: exports.wjRadialGaugeMeta.inputs, outputs: exports.wjRadialGaugeMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjRadialGauge
})
}].concat(exports.wjRadialGaugeMeta.providers)
}, ]
}, ];
WjRadialGauge.ctorParameters = function()
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
exports.WjRadialGauge = WjRadialGauge;
exports.wjRangeMeta = {
selector: 'wj-range', template: "", inputs: ['wjProperty', 'color', 'min', 'max', 'name', 'thickness', ], outputs: ['initialized', ], providers: []
};
WjRange = function(_super)
{
function WjRange(elRef, injector, parentCmp)
{
var _this=_super.call(this) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjProperty = 'ranges', behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjRange, _super), WjRange.prototype.created = function(){}, WjRange.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjRange.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjRange.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjRange
}(wjcGauge.Range);
WjRange.meta = {outputs: exports.wjRangeMeta.outputs};
WjRange.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjRangeMeta.selector, template: exports.wjRangeMeta.template, inputs: exports.wjRangeMeta.inputs, outputs: exports.wjRangeMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjRange
})
}].concat(exports.wjRangeMeta.providers)
}, ]
}, ];
WjRange.ctorParameters = function()
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
exports.WjRange = WjRange;
moduleExports = [WjLinearGauge, WjBulletGraph, WjRadialGauge, WjRange];
WjGaugeModule = function()
{
function WjGaugeModule(){}
return WjGaugeModule
}();
WjGaugeModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjGaugeModule.ctorParameters = function()
{
return []
};
exports.WjGaugeModule = WjGaugeModule
})