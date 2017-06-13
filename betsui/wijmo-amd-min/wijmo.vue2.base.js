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
define(["require", "exports", "wijmo/wijmo", "wijmo/wijmo.vue2.base"], function(require, exports, wjcCore, wjcSelf)
{
"use strict";
function _getProps(ctlClass, extraProps)
{
for (var p, proto, props, cls=window, ns=ctlClass.split('.'), i=0; i < ns.length && cls != null; i++)
cls = cls[ns[i]];
if (!cls)
return null;
for (p = ['control', 'initialized'], proto = cls.prototype; proto != Object.prototype; proto = Object.getPrototypeOf(proto))
for (props = Object.getOwnPropertyNames(proto), i = 0; i < props.length; i++)
{
var prop=props[i],
pd=Object.getOwnPropertyDescriptor(proto, prop),
eventRaiser=prop.match(/^on[A-Z]/);
(pd.set || eventRaiser) && (eventRaiser && (prop = prop[2].toLowerCase() + prop.substr(3)), p.indexOf(prop) < 0 && !prop.match(/disabled|required/) && p.push(prop))
}
return extraProps && Array.prototype.push.apply(p, extraProps), p
}
function _initialize(component, ctl)
{
function _updateControl(newValue)
{
this.ctl[this.prop] = newValue
}
var props=[];
for (var prop in component.$options.propsData)
props.push(prop);
return props.sort(), props.forEach(function(prop)
{
!(prop in ctl) || ctl[prop] instanceof wjcCore.Event || wjcCore.isUndefined(component[prop]) || (ctl[prop] = component[prop], component.$watch(prop, _updateControl.bind({
ctl: ctl, prop: prop
})))
}), props.forEach(function(prop)
{
if (ctl[prop] instanceof wjcCore.Event)
{
var event=ctl[prop];
wjcCore.isFunction(component[prop]) && event.addHandler(component[prop], ctl)
}
}), component.control && component.$parent && (component.$parent[component.control] = ctl), wjcCore.isFunction(component.initialized) && component.initialized(ctl), ctl
}
Object.defineProperty(exports, "__esModule", {value: !0});
window.wijmo = window.wijmo || {};
window.wijmo.vue2 = window.wijmo.vue2 || {};
window.wijmo.vue2.base = wjcSelf;
exports._getProps = _getProps;
exports._initialize = _initialize
})