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
define(["require", "exports", "wijmo/wijmo.vue2.base", "wijmo/wijmo.nav", "wijmo/wijmo.vue2.nav", "vue", "vue"], function(require, exports, wjcVue2Base, wjcNav, wjcSelf, vue_1, VueModule)
{
"use strict";
Object.defineProperty(exports, "__esModule", {value: !0});
window.wijmo = window.wijmo || {};
window.wijmo.vue2 = window.wijmo.vue2 || {};
window.wijmo.vue2.nav = wjcSelf;
exports.Vue = vue_1.default || VueModule;
exports.WjTreeView = exports.Vue.component('wj-tree-view', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.nav.TreeView'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcNav.TreeView(this.$el))
}
})
})