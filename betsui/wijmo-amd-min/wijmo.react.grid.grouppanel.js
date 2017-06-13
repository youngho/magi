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
define(["require", "exports", "wijmo/wijmo.react.base", "wijmo/wijmo.grid.grouppanel", "wijmo/wijmo.react.grid.grouppanel"], function(require, exports, wjcReactBase, wjcGridGrouppanel, wjcSelf)
{
"use strict";
var GroupPanel,
Wj;
Object.defineProperty(exports, "__esModule", {value: !0});
window.wijmo = window.wijmo || {};
window.wijmo.react = window.wijmo.react || {};
window.wijmo.react.grid = window.wijmo.react.grid || {};
window.wijmo.react.grid.grouppanel = wjcSelf;
GroupPanel = function(_super)
{
function GroupPanel(props)
{
return _super.call(this, props, wjcGridGrouppanel.GroupPanel) || this
}
return __extends(GroupPanel, _super), GroupPanel
}(wjcReactBase.ComponentBase);
exports.GroupPanel = GroupPanel;
Wj = wjcReactBase
})