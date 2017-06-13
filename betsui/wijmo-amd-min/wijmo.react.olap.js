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
define(["require", "exports", "wijmo/wijmo.react.base", "wijmo/wijmo.olap", "wijmo/wijmo.react.olap"], function(require, exports, wjcReactBase, wjcOlap, wjcSelf)
{
"use strict";
var PivotGrid,
PivotChart,
PivotPanel,
Wj;
Object.defineProperty(exports, "__esModule", {value: !0});
window.wijmo = window.wijmo || {};
window.wijmo.react = window.wijmo.react || {};
window.wijmo.react.olap = wjcSelf;
PivotGrid = function(_super)
{
function PivotGrid(props)
{
return _super.call(this, props, wjcOlap.PivotGrid) || this
}
return __extends(PivotGrid, _super), PivotGrid
}(wjcReactBase.ComponentBase);
exports.PivotGrid = PivotGrid;
PivotChart = function(_super)
{
function PivotChart(props)
{
return _super.call(this, props, wjcOlap.PivotChart) || this
}
return __extends(PivotChart, _super), PivotChart
}(wjcReactBase.ComponentBase);
exports.PivotChart = PivotChart;
PivotPanel = function(_super)
{
function PivotPanel(props)
{
return _super.call(this, props, wjcOlap.PivotPanel) || this
}
return __extends(PivotPanel, _super), PivotPanel
}(wjcReactBase.ComponentBase);
exports.PivotPanel = PivotPanel;
Wj = wjcReactBase
})