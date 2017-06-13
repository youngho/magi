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
define(["require", "exports", "wijmo/wijmo.chart.animation", "@angular/core", "@angular/core", "@angular/core", "@angular/common", "wijmo/wijmo.angular2.directiveBase"], function(require, exports, wjcChartAnimation, core_1, core_2, core_3, common_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjFlexChartAnimation,
moduleExports,
WjChartAnimationModule;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.wjFlexChartAnimationMeta = {
selector: 'wj-flex-chart-animation', template: "", inputs: ['wjProperty', 'animationMode', 'easing', 'duration', 'axisAnimation', ], outputs: ['initialized', ], providers: []
};
WjFlexChartAnimation = function(_super)
{
function WjFlexChartAnimation(elRef, injector, parentCmp)
{
var _this=_super.call(this, parentCmp) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjFlexChartAnimation, _super), WjFlexChartAnimation.prototype.created = function(){}, WjFlexChartAnimation.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnimation.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnimation.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnimation
}(wjcChartAnimation.ChartAnimation);
WjFlexChartAnimation.meta = {outputs: exports.wjFlexChartAnimationMeta.outputs};
WjFlexChartAnimation.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexChartAnimationMeta.selector, template: exports.wjFlexChartAnimationMeta.template, inputs: exports.wjFlexChartAnimationMeta.inputs, outputs: exports.wjFlexChartAnimationMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnimation
})
}].concat(exports.wjFlexChartAnimationMeta.providers)
}, ]
}, ];
WjFlexChartAnimation.ctorParameters = function()
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
exports.WjFlexChartAnimation = WjFlexChartAnimation;
moduleExports = [WjFlexChartAnimation];
WjChartAnimationModule = function()
{
function WjChartAnimationModule(){}
return WjChartAnimationModule
}();
WjChartAnimationModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjChartAnimationModule.ctorParameters = function()
{
return []
};
exports.WjChartAnimationModule = WjChartAnimationModule
})