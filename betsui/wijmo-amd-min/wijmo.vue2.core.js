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
define(["require", "exports", "wijmo/wijmo", "wijmo/wijmo.vue2.core", "vue", "vue"], function(require, exports, wjcCore, wjcSelf, vue_1, VueModule)
{
"use strict";
Object.defineProperty(exports, "__esModule", {value: !0});
window.wijmo = window.wijmo || {};
window.wijmo.vue2 = window.wijmo.vue2 || {};
window.wijmo.vue2.core = wjcSelf;
exports.Vue = vue_1.default || VueModule;
exports.WjInclude = exports.Vue.component('wj-include', {
template: '<div/>', props: ['src'], mounted: function()
{
var _this=this;
wjcCore.httpRequest(this.src, {success: function(xhr)
{
_this.$el.innerHTML = xhr.response
}})
}
});
exports.WjFormat = exports.Vue.filter('wj-format', function(value, format)
{
return wjcCore.Globalize.format(value, format)
})
})