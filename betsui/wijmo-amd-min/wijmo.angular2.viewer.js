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
define(["require", "exports", "wijmo/wijmo.viewer", "wijmo/wijmo", "@angular/core", "@angular/core", "@angular/core", "@angular/common", "@angular/forms", "wijmo/wijmo.angular2.directiveBase"], function(require, exports, wjcViewer, wjcCore, core_1, core_2, core_3, common_1, forms_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjReportViewer,
WjPdfViewer,
moduleExports,
WjViewerModule;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.wjReportViewerMeta = {
selector: 'wj-report-viewer', template: "", inputs: ['wjModelProperty', 'serviceUrl', 'filePath', 'fullScreen', 'zoomFactor', 'mouseMode', 'selectMouseMode', 'viewMode', 'paginated', 'reportName', ], outputs: ['initialized', 'pageIndexChangedNg: pageIndexChanged', 'viewModeChangedNg: viewModeChanged', 'viewModeChangePC: viewModeChange', 'mouseModeChangedNg: mouseModeChanged', 'mouseModeChangePC: mouseModeChange', 'selectMouseModeChangedNg: selectMouseModeChanged', 'selectMouseModeChangePC: selectMouseModeChange', 'fullScreenChangedNg: fullScreenChanged', 'fullScreenChangePC: fullScreenChange', 'zoomFactorChangedNg: zoomFactorChanged', 'zoomFactorChangePC: zoomFactorChange', 'queryLoadingDataNg: queryLoadingData', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjReportViewer = function(_super)
{
function WjReportViewer(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.pageIndexChangedNg = new core_1.EventEmitter(!1), _this.viewModeChangedNg = new core_1.EventEmitter(!1), _this.viewModeChangePC = new core_1.EventEmitter(!1), _this.mouseModeChangedNg = new core_1.EventEmitter(!1), _this.mouseModeChangePC = new core_1.EventEmitter(!1), _this.selectMouseModeChangedNg = new core_1.EventEmitter(!1), _this.selectMouseModeChangePC = new core_1.EventEmitter(!1), _this.fullScreenChangedNg = new core_1.EventEmitter(!1), _this.fullScreenChangePC = new core_1.EventEmitter(!1), _this.zoomFactorChangedNg = new core_1.EventEmitter(!1), _this.zoomFactorChangePC = new core_1.EventEmitter(!1), _this.queryLoadingDataNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjReportViewer, _super), WjReportViewer.prototype.created = function(){}, WjReportViewer.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjReportViewer.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjReportViewer.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjReportViewer.prototype.onSelectMouseModeChanged = function(e)
{
(this.selectMouseModeChanged._handlers.length > 1 || this.selectMouseModeChangedNg.observers.length > 0) && wjcCore._deprecated('selectMouseModeChanged', 'mouseModeChanged');
this.selectMouseModeChanged.raise(this, e)
}, WjReportViewer
}(wjcViewer.ReportViewer);
WjReportViewer.meta = {
outputs: exports.wjReportViewerMeta.outputs, changeEvents: {
viewModeChanged: ['viewMode'], mouseModeChanged: ['mouseMode'], selectMouseModeChanged: ['selectMouseMode'], fullScreenChanged: ['fullScreen'], zoomFactorChanged: ['zoomFactor']
}
};
WjReportViewer.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjReportViewerMeta.selector, template: exports.wjReportViewerMeta.template, inputs: exports.wjReportViewerMeta.inputs, outputs: exports.wjReportViewerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjReportViewer
})
}].concat(exports.wjReportViewerMeta.providers)
}, ]
}, ];
WjReportViewer.ctorParameters = function()
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
exports.WjReportViewer = WjReportViewer;
exports.wjPdfViewerMeta = {
selector: 'wj-pdf-viewer', template: "", inputs: ['wjModelProperty', 'serviceUrl', 'filePath', 'fullScreen', 'zoomFactor', 'mouseMode', 'selectMouseMode', 'viewMode', ], outputs: ['initialized', 'pageIndexChangedNg: pageIndexChanged', 'viewModeChangedNg: viewModeChanged', 'viewModeChangePC: viewModeChange', 'mouseModeChangedNg: mouseModeChanged', 'mouseModeChangePC: mouseModeChange', 'selectMouseModeChangedNg: selectMouseModeChanged', 'selectMouseModeChangePC: selectMouseModeChange', 'fullScreenChangedNg: fullScreenChanged', 'fullScreenChangePC: fullScreenChange', 'zoomFactorChangedNg: zoomFactorChanged', 'zoomFactorChangePC: zoomFactorChange', 'queryLoadingDataNg: queryLoadingData', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjPdfViewer = function(_super)
{
function WjPdfViewer(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.pageIndexChangedNg = new core_1.EventEmitter(!1), _this.viewModeChangedNg = new core_1.EventEmitter(!1), _this.viewModeChangePC = new core_1.EventEmitter(!1), _this.mouseModeChangedNg = new core_1.EventEmitter(!1), _this.mouseModeChangePC = new core_1.EventEmitter(!1), _this.selectMouseModeChangedNg = new core_1.EventEmitter(!1), _this.selectMouseModeChangePC = new core_1.EventEmitter(!1), _this.fullScreenChangedNg = new core_1.EventEmitter(!1), _this.fullScreenChangePC = new core_1.EventEmitter(!1), _this.zoomFactorChangedNg = new core_1.EventEmitter(!1), _this.zoomFactorChangePC = new core_1.EventEmitter(!1), _this.queryLoadingDataNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjPdfViewer, _super), WjPdfViewer.prototype.created = function(){}, WjPdfViewer.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPdfViewer.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPdfViewer.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPdfViewer.prototype.onSelectMouseModeChanged = function(e)
{
(this.selectMouseModeChanged._handlers.length > 1 || this.selectMouseModeChangedNg.observers.length > 0) && wjcCore._deprecated('selectMouseModeChanged', 'mouseModeChanged');
this.selectMouseModeChanged.raise(this, e)
}, WjPdfViewer
}(wjcViewer.PdfViewer);
WjPdfViewer.meta = {
outputs: exports.wjPdfViewerMeta.outputs, changeEvents: {
viewModeChanged: ['viewMode'], mouseModeChanged: ['mouseMode'], selectMouseModeChanged: ['selectMouseMode'], fullScreenChanged: ['fullScreen'], zoomFactorChanged: ['zoomFactor']
}
};
WjPdfViewer.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjPdfViewerMeta.selector, template: exports.wjPdfViewerMeta.template, inputs: exports.wjPdfViewerMeta.inputs, outputs: exports.wjPdfViewerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPdfViewer
})
}].concat(exports.wjPdfViewerMeta.providers)
}, ]
}, ];
WjPdfViewer.ctorParameters = function()
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
exports.WjPdfViewer = WjPdfViewer;
moduleExports = [WjReportViewer, WjPdfViewer];
WjViewerModule = function()
{
function WjViewerModule(){}
return WjViewerModule
}();
WjViewerModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjViewerModule.ctorParameters = function()
{
return []
};
exports.WjViewerModule = WjViewerModule
})