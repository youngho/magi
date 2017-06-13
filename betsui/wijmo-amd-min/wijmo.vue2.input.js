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
define(["require", "exports", "wijmo/wijmo.vue2.base", "wijmo/wijmo.input", "wijmo/wijmo.vue2.input", "vue", "vue"], function(require, exports, wjcVue2Base, wjcInput, wjcSelf, vue_1, VueModule)
{
"use strict";
Object.defineProperty(exports, "__esModule", {value: !0});
window.wijmo = window.wijmo || {};
window.wijmo.vue2 = window.wijmo.vue2 || {};
window.wijmo.vue2.input = wjcSelf;
exports.Vue = vue_1.default || VueModule;
exports.WjComboBox = exports.Vue.component('wj-combo-box', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.ComboBox'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.ComboBox(this.$el))
}
});
exports.WjAutoComplete = exports.Vue.component('wj-auto-complete', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.AutoComplete'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.AutoComplete(this.$el))
}
});
exports.WjCalendar = exports.Vue.component('wj-calendar', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.Calendar'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.Calendar(this.$el))
}
});
exports.WjColorPicker = exports.Vue.component('wj-color-picker', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.ColorPicker'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.ColorPicker(this.$el))
}
});
exports.WjInputMask = exports.Vue.component('wj-input-mask', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.InputMask'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.InputMask(this.$el))
}
});
exports.WjInputColor = exports.Vue.component('wj-input-color', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.InputColor'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.InputColor(this.$el))
}
});
exports.WjMultiSelect = exports.Vue.component('wj-multi-select', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.MultiSelect'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.MultiSelect(this.$el))
}
});
exports.WjMultiAutoComplete = exports.Vue.component('wj-multi-auto-complete', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.MultiAutoComplete'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.MultiAutoComplete(this.$el))
}
});
exports.WjInputNumber = exports.Vue.component('wj-input-number', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.InputNumber'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.InputNumber(this.$el))
}
});
exports.WjInputDate = exports.Vue.component('wj-input-date', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.InputDate'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.InputDate(this.$el))
}
});
exports.WjInputTime = exports.Vue.component('wj-input-time', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.InputTime'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.InputTime(this.$el))
}
});
exports.WjInputDateTime = exports.Vue.component('wj-input-date-time', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.InputDateTime'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.InputDateTime(this.$el))
}
});
exports.WjListBox = exports.Vue.component('wj-list-box', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.ListBox'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.ListBox(this.$el))
}
});
exports.WjMenu = exports.Vue.component('wj-menu', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.input.Menu'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.Menu(this.$el))
}
});
exports.WjPopup = exports.Vue.component('wj-popup', {
template: '<div><slot/></div>', props: wjcVue2Base._getProps('wijmo.input.Popup'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcInput.Popup(this.$el))
}
})
})