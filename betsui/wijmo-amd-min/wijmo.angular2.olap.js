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
define(["require", "exports", "wijmo/wijmo.olap", "@angular/core", "@angular/core", "@angular/core", "@angular/common", "@angular/forms", "wijmo/wijmo.angular2.directiveBase"], function(require, exports, wjcOlap, core_1, core_2, core_3, common_1, forms_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjPivotGrid,
WjPivotChart,
WjPivotPanel,
moduleExports,
WjOlapModule;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.wjPivotGridMeta = {
selector: 'wj-pivot-grid', template: "", inputs: ['wjModelProperty', 'isDisabled', 'newRowAtTop', 'allowAddNew', 'allowDelete', 'allowDragging', 'allowMerging', 'allowResizing', 'allowSorting', 'autoSizeMode', 'autoGenerateColumns', 'childItemsPath', 'groupHeaderFormat', 'headersVisibility', 'showSelectedHeaders', 'showMarquee', 'itemFormatter', 'isReadOnly', 'imeEnabled', 'mergeManager', 'selectionMode', 'showGroups', 'showSort', 'showAlternatingRows', 'showErrors', 'validateEdits', 'treeIndent', 'itemsSource', 'autoClipboard', 'frozenRows', 'frozenColumns', 'deferResizing', 'sortRowIndex', 'stickyHeaders', 'preserveSelectedState', 'preserveOutlineState', 'showDetailOnDoubleClick', 'customContextMenu', 'collapsibleSubtotals', 'centerHeadersVertically', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'beginningEditNg: beginningEdit', 'cellEditEndedNg: cellEditEnded', 'cellEditEndingNg: cellEditEnding', 'prepareCellForEditNg: prepareCellForEdit', 'formatItemNg: formatItem', 'resizingColumnNg: resizingColumn', 'resizedColumnNg: resizedColumn', 'autoSizingColumnNg: autoSizingColumn', 'autoSizedColumnNg: autoSizedColumn', 'draggingColumnNg: draggingColumn', 'draggingColumnOverNg: draggingColumnOver', 'draggedColumnNg: draggedColumn', 'sortingColumnNg: sortingColumn', 'sortedColumnNg: sortedColumn', 'resizingRowNg: resizingRow', 'resizedRowNg: resizedRow', 'autoSizingRowNg: autoSizingRow', 'autoSizedRowNg: autoSizedRow', 'draggingRowNg: draggingRow', 'draggingRowOverNg: draggingRowOver', 'draggedRowNg: draggedRow', 'deletingRowNg: deletingRow', 'loadingRowsNg: loadingRows', 'loadedRowsNg: loadedRows', 'rowEditStartingNg: rowEditStarting', 'rowEditStartedNg: rowEditStarted', 'rowEditEndingNg: rowEditEnding', 'rowEditEndedNg: rowEditEnded', 'rowAddedNg: rowAdded', 'groupCollapsedChangedNg: groupCollapsedChanged', 'groupCollapsedChangingNg: groupCollapsedChanging', 'itemsSourceChangedNg: itemsSourceChanged', 'selectionChangingNg: selectionChanging', 'selectionChangedNg: selectionChanged', 'scrollPositionChangedNg: scrollPositionChanged', 'updatingViewNg: updatingView', 'updatedViewNg: updatedView', 'updatingLayoutNg: updatingLayout', 'updatedLayoutNg: updatedLayout', 'pastingNg: pasting', 'pastedNg: pasted', 'pastingCellNg: pastingCell', 'pastedCellNg: pastedCell', 'copyingNg: copying', 'copiedNg: copied', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjPivotGrid = function(_super)
{
function WjPivotGrid(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.beginningEditNg = new core_1.EventEmitter(!1), _this.cellEditEndedNg = new core_1.EventEmitter(!1), _this.cellEditEndingNg = new core_1.EventEmitter(!1), _this.prepareCellForEditNg = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.resizingColumnNg = new core_1.EventEmitter(!1), _this.resizedColumnNg = new core_1.EventEmitter(!1), _this.autoSizingColumnNg = new core_1.EventEmitter(!1), _this.autoSizedColumnNg = new core_1.EventEmitter(!1), _this.draggingColumnNg = new core_1.EventEmitter(!1), _this.draggingColumnOverNg = new core_1.EventEmitter(!1), _this.draggedColumnNg = new core_1.EventEmitter(!1), _this.sortingColumnNg = new core_1.EventEmitter(!1), _this.sortedColumnNg = new core_1.EventEmitter(!1), _this.resizingRowNg = new core_1.EventEmitter(!1), _this.resizedRowNg = new core_1.EventEmitter(!1), _this.autoSizingRowNg = new core_1.EventEmitter(!1), _this.autoSizedRowNg = new core_1.EventEmitter(!1), _this.draggingRowNg = new core_1.EventEmitter(!1), _this.draggingRowOverNg = new core_1.EventEmitter(!1), _this.draggedRowNg = new core_1.EventEmitter(!1), _this.deletingRowNg = new core_1.EventEmitter(!1), _this.loadingRowsNg = new core_1.EventEmitter(!1), _this.loadedRowsNg = new core_1.EventEmitter(!1), _this.rowEditStartingNg = new core_1.EventEmitter(!1), _this.rowEditStartedNg = new core_1.EventEmitter(!1), _this.rowEditEndingNg = new core_1.EventEmitter(!1), _this.rowEditEndedNg = new core_1.EventEmitter(!1), _this.rowAddedNg = new core_1.EventEmitter(!1), _this.groupCollapsedChangedNg = new core_1.EventEmitter(!1), _this.groupCollapsedChangingNg = new core_1.EventEmitter(!1), _this.itemsSourceChangedNg = new core_1.EventEmitter(!1), _this.selectionChangingNg = new core_1.EventEmitter(!1), _this.selectionChangedNg = new core_1.EventEmitter(!1), _this.scrollPositionChangedNg = new core_1.EventEmitter(!1), _this.updatingViewNg = new core_1.EventEmitter(!1), _this.updatedViewNg = new core_1.EventEmitter(!1), _this.updatingLayoutNg = new core_1.EventEmitter(!1), _this.updatedLayoutNg = new core_1.EventEmitter(!1), _this.pastingNg = new core_1.EventEmitter(!1), _this.pastedNg = new core_1.EventEmitter(!1), _this.pastingCellNg = new core_1.EventEmitter(!1), _this.pastedCellNg = new core_1.EventEmitter(!1), _this.copyingNg = new core_1.EventEmitter(!1), _this.copiedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjPivotGrid, _super), WjPivotGrid.prototype.created = function(){}, WjPivotGrid.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPivotGrid.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPivotGrid.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPivotGrid
}(wjcOlap.PivotGrid);
WjPivotGrid.meta = {outputs: exports.wjPivotGridMeta.outputs};
WjPivotGrid.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjPivotGridMeta.selector, template: exports.wjPivotGridMeta.template, inputs: exports.wjPivotGridMeta.inputs, outputs: exports.wjPivotGridMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPivotGrid
})
}].concat(exports.wjPivotGridMeta.providers)
}, ]
}, ];
WjPivotGrid.ctorParameters = function()
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
exports.WjPivotGrid = WjPivotGrid;
exports.wjPivotChartMeta = {
selector: 'wj-pivot-chart', template: "", inputs: ['wjModelProperty', 'chartType', 'showHierarchicalAxes', 'showTotals', 'stacking', 'maxSeries', 'maxPoints', 'itemsSource', ], outputs: ['initialized', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjPivotChart = function(_super)
{
function WjPivotChart(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjPivotChart, _super), WjPivotChart.prototype.created = function(){}, WjPivotChart.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPivotChart.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPivotChart.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPivotChart
}(wjcOlap.PivotChart);
WjPivotChart.meta = {outputs: exports.wjPivotChartMeta.outputs};
WjPivotChart.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjPivotChartMeta.selector, template: exports.wjPivotChartMeta.template, inputs: exports.wjPivotChartMeta.inputs, outputs: exports.wjPivotChartMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPivotChart
})
}].concat(exports.wjPivotChartMeta.providers)
}, ]
}, ];
WjPivotChart.ctorParameters = function()
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
exports.WjPivotChart = WjPivotChart;
exports.wjPivotPanelMeta = {
selector: 'wj-pivot-panel', template: "", inputs: ['wjModelProperty', 'autoGenerateFields', 'viewDefinition', 'engine', 'itemsSource', ], outputs: ['initialized', 'itemsSourceChangedNg: itemsSourceChanged', 'viewDefinitionChangedNg: viewDefinitionChanged', 'updatingViewNg: updatingView', 'updatedViewNg: updatedView', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjPivotPanel = function(_super)
{
function WjPivotPanel(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.itemsSourceChangedNg = new core_1.EventEmitter(!1), _this.viewDefinitionChangedNg = new core_1.EventEmitter(!1), _this.updatingViewNg = new core_1.EventEmitter(!1), _this.updatedViewNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjPivotPanel, _super), WjPivotPanel.prototype.created = function(){}, WjPivotPanel.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPivotPanel.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPivotPanel.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPivotPanel
}(wjcOlap.PivotPanel);
WjPivotPanel.meta = {outputs: exports.wjPivotPanelMeta.outputs};
WjPivotPanel.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjPivotPanelMeta.selector, template: exports.wjPivotPanelMeta.template, inputs: exports.wjPivotPanelMeta.inputs, outputs: exports.wjPivotPanelMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPivotPanel
})
}].concat(exports.wjPivotPanelMeta.providers)
}, ]
}, ];
WjPivotPanel.ctorParameters = function()
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
exports.WjPivotPanel = WjPivotPanel;
moduleExports = [WjPivotGrid, WjPivotChart, WjPivotPanel];
WjOlapModule = function()
{
function WjOlapModule(){}
return WjOlapModule
}();
WjOlapModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjOlapModule.ctorParameters = function()
{
return []
};
exports.WjOlapModule = WjOlapModule
})