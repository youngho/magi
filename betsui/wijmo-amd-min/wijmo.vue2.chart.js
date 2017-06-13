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
define(["require", "exports", "wijmo/wijmo.vue2.base", "wijmo/wijmo.chart", "wijmo/wijmo.vue2.chart", "vue", "vue"], function(require, exports, wjcVue2Base, wjcChart, wjcSelf, vue_1, VueModule)
{
"use strict";
Object.defineProperty(exports, "__esModule", {value: !0});
window.wijmo = window.wijmo || {};
window.wijmo.vue2 = window.wijmo.vue2 || {};
window.wijmo.vue2.chart = wjcSelf;
exports.Vue = vue_1.default || VueModule;
exports.WjFlexChart = exports.Vue.component('wj-flex-chart', {
template: '<div><slot/></div>', props: wjcVue2Base._getProps('wijmo.chart.FlexChart', ['tooltipContent']), mounted: function()
{
var _this=this,
ctl=new wjcChart.FlexChart(this.$el);
this.$children.forEach(function(item)
{
var series,
style,
legend,
axis;
switch (item.$options.name)
{
case'wj-flex-chart-series':
series = wjcVue2Base._initialize(item, new wjcChart.Series);
item.$el.style.cssText.length && (style = {}, item.$el.style.cssText.split(';').forEach(function(prop)
{
var kv=prop.split(':');
kv.length == 2 && (style[kv[0].trim()] = kv[1].trim())
}), series.style = style);
ctl.series.push(series);
break;
case'wj-flex-chart-legend':
legend = wjcVue2Base._initialize(item, new wjcChart.Legend(null));
ctl.legend = legend;
break;
case'wj-flex-chart-axis':
axis = wjcVue2Base._initialize(item, new wjcChart.Axis);
item.wjProperty ? ctl[item.wjProperty] = axis : ctl.axes.push(axis)
}
_this.$el.removeChild(item.$el)
});
this.tooltipContent && (ctl.tooltip.content = this.tooltipContent);
wjcVue2Base._initialize(this, ctl)
}
});
exports.WjFlexChartAxis = exports.Vue.component('wj-flex-chart-axis', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.chart.Axis', ['wjProperty'])
});
exports.WjFlexChartLegend = exports.Vue.component('wj-flex-chart-legend', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.chart.Legend')
});
exports.WjFlexChartSeries = exports.Vue.component('wj-flex-chart-series', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.chart.Series')
})
})