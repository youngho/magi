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
define(["require", "exports", "wijmo/wijmo.react.base", "wijmo/wijmo.grid", "wijmo/wijmo.react.grid"], function(require, exports, wjcReactBase, wjcGrid, wjcSelf)
{
"use strict";
var FlexGrid,
Wj;
Object.defineProperty(exports, "__esModule", {value: !0});
window.wijmo = window.wijmo || {};
window.wijmo.react = window.wijmo.react || {};
window.wijmo.react.grid = wjcSelf;
FlexGrid = function(_super)
{
function FlexGrid(props)
{
return _super.call(this, props, wjcGrid.FlexGrid) || this
}
return __extends(FlexGrid, _super), FlexGrid
}(wjcReactBase.ComponentBase);
exports.FlexGrid = FlexGrid;
Wj = wjcReactBase
})