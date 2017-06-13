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
define(["require", "exports", "wijmo/wijmo.input", "wijmo/wijmo", "@angular/core", "@angular/core", "@angular/core", "@angular/common", "@angular/forms", "wijmo/wijmo.angular2.directiveBase"], function(require, exports, wjcInput, wjcCore, core_1, core_2, core_3, common_1, forms_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var WjComboBox,
WjAutoComplete,
WjCalendar,
WjColorPicker,
WjInputMask,
WjInputColor,
WjMultiSelect,
WjMultiAutoComplete,
WjInputNumber,
WjInputDate,
WjInputTime,
WjInputDateTime,
WjListBox,
WjMenu,
WjMenuItem,
WjMenuItemTemplateDir,
WjMenuSeparator,
WjItemTemplate,
WjPopup,
WjContextMenu,
WjCollectionViewNavigator,
WjCollectionViewPager,
moduleExports,
WjInputModule;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.wjComboBoxMeta = {
selector: 'wj-combo-box', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'itemsSource', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjComboBox = function(_super)
{
function WjComboBox(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'selectedValue', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangingNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangedNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.selectedIndexChangedNg = new core_1.EventEmitter(!1), _this.selectedIndexChangePC = new core_1.EventEmitter(!1), _this.selectedItemChangePC = new core_1.EventEmitter(!1), _this.selectedValueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjComboBox, _super), WjComboBox.prototype.created = function(){}, WjComboBox.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjComboBox.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjComboBox.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjComboBox
}(wjcInput.ComboBox);
WjComboBox.meta = {
outputs: exports.wjComboBoxMeta.outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue']
}
};
WjComboBox.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjComboBoxMeta.selector, template: exports.wjComboBoxMeta.template, inputs: exports.wjComboBoxMeta.inputs, outputs: exports.wjComboBoxMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjComboBox
})
}].concat(exports.wjComboBoxMeta.providers)
}, ]
}, ];
WjComboBox.ctorParameters = function()
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
exports.WjComboBox = WjComboBox;
exports.wjAutoCompleteMeta = {
selector: 'wj-auto-complete', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'delay', 'maxItems', 'minLength', 'cssMatch', 'itemsSourceFunction', 'searchMemberPath', 'itemsSource', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjAutoComplete = function(_super)
{
function WjAutoComplete(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'selectedValue', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangingNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangedNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.selectedIndexChangedNg = new core_1.EventEmitter(!1), _this.selectedIndexChangePC = new core_1.EventEmitter(!1), _this.selectedItemChangePC = new core_1.EventEmitter(!1), _this.selectedValueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjAutoComplete, _super), WjAutoComplete.prototype.created = function(){}, WjAutoComplete.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjAutoComplete.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjAutoComplete.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjAutoComplete
}(wjcInput.AutoComplete);
WjAutoComplete.meta = {
outputs: exports.wjAutoCompleteMeta.outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue']
}
};
WjAutoComplete.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjAutoCompleteMeta.selector, template: exports.wjAutoCompleteMeta.template, inputs: exports.wjAutoCompleteMeta.inputs, outputs: exports.wjAutoCompleteMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjAutoComplete
})
}].concat(exports.wjAutoCompleteMeta.providers)
}, ]
}, ];
WjAutoComplete.ctorParameters = function()
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
exports.WjAutoComplete = WjAutoComplete;
exports.wjCalendarMeta = {
selector: 'wj-calendar', template: "", inputs: ['wjModelProperty', 'isDisabled', 'monthView', 'showHeader', 'itemFormatter', 'itemValidator', 'firstDayOfWeek', 'max', 'min', 'selectionMode', 'isReadOnly', 'value', 'displayMonth', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', 'displayMonthChangedNg: displayMonthChanged', 'displayMonthChangePC: displayMonthChange', 'formatItemNg: formatItem', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjCalendar = function(_super)
{
function WjCalendar(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), _this.displayMonthChangedNg = new core_1.EventEmitter(!1), _this.displayMonthChangePC = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjCalendar, _super), WjCalendar.prototype.created = function(){}, WjCalendar.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjCalendar.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjCalendar.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjCalendar
}(wjcInput.Calendar);
WjCalendar.meta = {
outputs: exports.wjCalendarMeta.outputs, changeEvents: {
valueChanged: ['value'], displayMonthChanged: ['displayMonth']
}
};
WjCalendar.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjCalendarMeta.selector, template: exports.wjCalendarMeta.template, inputs: exports.wjCalendarMeta.inputs, outputs: exports.wjCalendarMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjCalendar
})
}].concat(exports.wjCalendarMeta.providers)
}, ]
}, ];
WjCalendar.ctorParameters = function()
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
exports.WjCalendar = WjCalendar;
exports.wjColorPickerMeta = {
selector: 'wj-color-picker', template: "", inputs: ['wjModelProperty', 'isDisabled', 'showAlphaChannel', 'showColorString', 'palette', 'value', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjColorPicker = function(_super)
{
function WjColorPicker(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjColorPicker, _super), WjColorPicker.prototype.created = function(){}, WjColorPicker.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjColorPicker.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjColorPicker.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjColorPicker
}(wjcInput.ColorPicker);
WjColorPicker.meta = {
outputs: exports.wjColorPickerMeta.outputs, changeEvents: {valueChanged: ['value']}
};
WjColorPicker.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjColorPickerMeta.selector, template: exports.wjColorPickerMeta.template, inputs: exports.wjColorPickerMeta.inputs, outputs: exports.wjColorPickerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjColorPicker
})
}].concat(exports.wjColorPickerMeta.providers)
}, ]
}, ];
WjColorPicker.ctorParameters = function()
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
exports.WjColorPicker = WjColorPicker;
exports.wjInputMaskMeta = {
selector: 'wj-input-mask', template: "", inputs: ['wjModelProperty', 'isDisabled', 'mask', 'isRequired', 'promptChar', 'placeholder', 'rawValue', 'value', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'rawValueChangePC: rawValueChange', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjInputMask = function(_super)
{
function WjInputMask(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.rawValueChangePC = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjInputMask, _super), WjInputMask.prototype.created = function(){}, WjInputMask.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputMask.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputMask.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputMask
}(wjcInput.InputMask);
WjInputMask.meta = {
outputs: exports.wjInputMaskMeta.outputs, changeEvents: {valueChanged: ['rawValue', 'value']}
};
WjInputMask.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjInputMaskMeta.selector, template: exports.wjInputMaskMeta.template, inputs: exports.wjInputMaskMeta.inputs, outputs: exports.wjInputMaskMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputMask
})
}].concat(exports.wjInputMaskMeta.providers)
}, ]
}, ];
WjInputMask.ctorParameters = function()
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
exports.WjInputMask = WjInputMask;
exports.wjInputColorMeta = {
selector: 'wj-input-color', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'showAlphaChannel', 'value', 'text', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjInputColor = function(_super)
{
function WjInputColor(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangingNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangedNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjInputColor, _super), WjInputColor.prototype.created = function(){}, WjInputColor.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputColor.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputColor.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputColor
}(wjcInput.InputColor);
WjInputColor.meta = {
outputs: exports.wjInputColorMeta.outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], valueChanged: ['value']
}
};
WjInputColor.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjInputColorMeta.selector, template: exports.wjInputColorMeta.template, inputs: exports.wjInputColorMeta.inputs, outputs: exports.wjInputColorMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputColor
})
}].concat(exports.wjInputColorMeta.providers)
}, ]
}, ];
WjInputColor.ctorParameters = function()
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
exports.WjInputColor = WjInputColor;
exports.wjMultiSelectMeta = {
selector: 'wj-multi-select', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'checkedMemberPath', 'maxHeaderItems', 'headerFormat', 'headerFormatter', 'itemsSource', 'checkedItems', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', 'checkedItemsChangedNg: checkedItemsChanged', 'checkedItemsChangePC: checkedItemsChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjMultiSelect = function(_super)
{
function WjMultiSelect(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'checkedItems', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangingNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangedNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.selectedIndexChangedNg = new core_1.EventEmitter(!1), _this.selectedIndexChangePC = new core_1.EventEmitter(!1), _this.selectedItemChangePC = new core_1.EventEmitter(!1), _this.selectedValueChangePC = new core_1.EventEmitter(!1), _this.checkedItemsChangedNg = new core_1.EventEmitter(!1), _this.checkedItemsChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjMultiSelect, _super), WjMultiSelect.prototype.created = function(){}, WjMultiSelect.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjMultiSelect.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjMultiSelect.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjMultiSelect
}(wjcInput.MultiSelect);
WjMultiSelect.meta = {
outputs: exports.wjMultiSelectMeta.outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue'], checkedItemsChanged: ['checkedItems']
}
};
WjMultiSelect.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjMultiSelectMeta.selector, template: exports.wjMultiSelectMeta.template, inputs: exports.wjMultiSelectMeta.inputs, outputs: exports.wjMultiSelectMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjMultiSelect
})
}].concat(exports.wjMultiSelectMeta.providers)
}, ]
}, ];
WjMultiSelect.ctorParameters = function()
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
exports.WjMultiSelect = WjMultiSelect;
exports.wjMultiAutoCompleteMeta = {
selector: 'wj-multi-auto-complete', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'delay', 'maxItems', 'minLength', 'cssMatch', 'itemsSourceFunction', 'searchMemberPath', 'maxSelectedItems', 'selectedItems', 'itemsSource', 'selectedMemberPath', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', 'selectedItemsChangedNg: selectedItemsChanged', 'selectedItemsChangePC: selectedItemsChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjMultiAutoComplete = function(_super)
{
function WjMultiAutoComplete(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'selectedItems', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangingNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangedNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.selectedIndexChangedNg = new core_1.EventEmitter(!1), _this.selectedIndexChangePC = new core_1.EventEmitter(!1), _this.selectedItemChangePC = new core_1.EventEmitter(!1), _this.selectedValueChangePC = new core_1.EventEmitter(!1), _this.selectedItemsChangedNg = new core_1.EventEmitter(!1), _this.selectedItemsChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjMultiAutoComplete, _super), WjMultiAutoComplete.prototype.created = function(){}, WjMultiAutoComplete.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjMultiAutoComplete.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjMultiAutoComplete.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjMultiAutoComplete
}(wjcInput.MultiAutoComplete);
WjMultiAutoComplete.meta = {
outputs: exports.wjMultiAutoCompleteMeta.outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue'], selectedItemsChanged: ['selectedItems']
}
};
WjMultiAutoComplete.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjMultiAutoCompleteMeta.selector, template: exports.wjMultiAutoCompleteMeta.template, inputs: exports.wjMultiAutoCompleteMeta.inputs, outputs: exports.wjMultiAutoCompleteMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjMultiAutoComplete
})
}].concat(exports.wjMultiAutoCompleteMeta.providers)
}, ]
}, ];
WjMultiAutoComplete.ctorParameters = function()
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
exports.WjMultiAutoComplete = WjMultiAutoComplete;
exports.wjInputNumberMeta = {
selector: 'wj-input-number', template: "", inputs: ['wjModelProperty', 'isDisabled', 'showSpinner', 'max', 'min', 'step', 'isRequired', 'placeholder', 'inputType', 'format', 'isReadOnly', 'value', 'text', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', 'textChangedNg: textChanged', 'textChangePC: textChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjInputNumber = function(_super)
{
function WjInputNumber(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjInputNumber, _super), WjInputNumber.prototype.created = function(){}, WjInputNumber.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputNumber.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputNumber.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputNumber
}(wjcInput.InputNumber);
WjInputNumber.meta = {
outputs: exports.wjInputNumberMeta.outputs, changeEvents: {
valueChanged: ['value'], textChanged: ['text']
}
};
WjInputNumber.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjInputNumberMeta.selector, template: exports.wjInputNumberMeta.template, inputs: exports.wjInputNumberMeta.inputs, outputs: exports.wjInputNumberMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputNumber
})
}].concat(exports.wjInputNumberMeta.providers)
}, ]
}, ];
WjInputNumber.ctorParameters = function()
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
exports.WjInputNumber = WjInputNumber;
exports.wjInputDateMeta = {
selector: 'wj-input-date', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'selectionMode', 'format', 'mask', 'max', 'min', 'inputType', 'itemValidator', 'itemFormatter', 'text', 'value', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjInputDate = function(_super)
{
function WjInputDate(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangingNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangedNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjInputDate, _super), WjInputDate.prototype.created = function(){}, WjInputDate.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputDate.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputDate.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputDate
}(wjcInput.InputDate);
WjInputDate.meta = {
outputs: exports.wjInputDateMeta.outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], valueChanged: ['value']
}
};
WjInputDate.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjInputDateMeta.selector, template: exports.wjInputDateMeta.template, inputs: exports.wjInputDateMeta.inputs, outputs: exports.wjInputDateMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputDate
})
}].concat(exports.wjInputDateMeta.providers)
}, ]
}, ];
WjInputDate.ctorParameters = function()
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
exports.WjInputDate = WjInputDate;
exports.wjInputTimeMeta = {
selector: 'wj-input-time', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'max', 'min', 'step', 'format', 'mask', 'inputType', 'itemsSource', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', 'value', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjInputTime = function(_super)
{
function WjInputTime(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangingNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangedNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.selectedIndexChangedNg = new core_1.EventEmitter(!1), _this.selectedIndexChangePC = new core_1.EventEmitter(!1), _this.selectedItemChangePC = new core_1.EventEmitter(!1), _this.selectedValueChangePC = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjInputTime, _super), WjInputTime.prototype.created = function(){}, WjInputTime.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputTime.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputTime.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputTime
}(wjcInput.InputTime);
WjInputTime.meta = {
outputs: exports.wjInputTimeMeta.outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue'], valueChanged: ['value']
}
};
WjInputTime.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjInputTimeMeta.selector, template: exports.wjInputTimeMeta.template, inputs: exports.wjInputTimeMeta.inputs, outputs: exports.wjInputTimeMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputTime
})
}].concat(exports.wjInputTimeMeta.providers)
}, ]
}, ];
WjInputTime.ctorParameters = function()
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
exports.WjInputTime = WjInputTime;
exports.wjInputDateTimeMeta = {
selector: 'wj-input-date-time', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'selectionMode', 'format', 'mask', 'max', 'min', 'inputType', 'itemValidator', 'itemFormatter', 'timeMax', 'timeMin', 'timeStep', 'timeFormat', 'text', 'value', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjInputDateTime = function(_super)
{
function WjInputDateTime(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'value', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangingNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangedNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), _this.valueChangedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjInputDateTime, _super), WjInputDateTime.prototype.created = function(){}, WjInputDateTime.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputDateTime.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputDateTime.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputDateTime
}(wjcInput.InputDateTime);
WjInputDateTime.meta = {
outputs: exports.wjInputDateTimeMeta.outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], valueChanged: ['value']
}
};
WjInputDateTime.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjInputDateTimeMeta.selector, template: exports.wjInputDateTimeMeta.template, inputs: exports.wjInputDateTimeMeta.inputs, outputs: exports.wjInputDateTimeMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputDateTime
})
}].concat(exports.wjInputDateTimeMeta.providers)
}, ]
}, ];
WjInputDateTime.ctorParameters = function()
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
exports.WjInputDateTime = WjInputDateTime;
exports.wjListBoxMeta = {
selector: 'wj-list-box', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'isContentHtml', 'maxHeight', 'selectedValuePath', 'itemFormatter', 'displayMemberPath', 'checkedMemberPath', 'itemsSource', 'selectedIndex', 'selectedItem', 'selectedValue', 'checkedItems', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'formatItemNg: formatItem', 'itemsChangedNg: itemsChanged', 'itemCheckedNg: itemChecked', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', 'checkedItemsChangedNg: checkedItemsChanged', 'checkedItemsChangePC: checkedItemsChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjListBox = function(_super)
{
function WjListBox(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'selectedValue', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.itemsChangedNg = new core_1.EventEmitter(!1), _this.itemCheckedNg = new core_1.EventEmitter(!1), _this.selectedIndexChangedNg = new core_1.EventEmitter(!1), _this.selectedIndexChangePC = new core_1.EventEmitter(!1), _this.selectedItemChangePC = new core_1.EventEmitter(!1), _this.selectedValueChangePC = new core_1.EventEmitter(!1), _this.checkedItemsChangedNg = new core_1.EventEmitter(!1), _this.checkedItemsChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjListBox, _super), WjListBox.prototype.created = function(){}, WjListBox.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjListBox.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjListBox.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjListBox
}(wjcInput.ListBox);
WjListBox.meta = {
outputs: exports.wjListBoxMeta.outputs, changeEvents: {
selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue'], checkedItemsChanged: ['checkedItems']
}
};
WjListBox.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjListBoxMeta.selector, template: exports.wjListBoxMeta.template, inputs: exports.wjListBoxMeta.inputs, outputs: exports.wjListBoxMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjListBox
})
}].concat(exports.wjListBoxMeta.providers)
}, ]
}, ];
WjListBox.ctorParameters = function()
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
exports.WjListBox = WjListBox;
exports.wjMenuMeta = {
selector: 'wj-menu', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'header', 'commandParameterPath', 'commandPath', 'isButton', 'itemsSource', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', 'value', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', 'itemClickedNg: itemClicked', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjMenu = function(_super)
{
function WjMenu(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjModelProperty = 'selectedValue', _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangingNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangedNg = new core_1.EventEmitter(!1), _this.isDroppedDownChangePC = new core_1.EventEmitter(!1), _this.textChangedNg = new core_1.EventEmitter(!1), _this.textChangePC = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.selectedIndexChangedNg = new core_1.EventEmitter(!1), _this.selectedIndexChangePC = new core_1.EventEmitter(!1), _this.selectedItemChangePC = new core_1.EventEmitter(!1), _this.selectedValueChangePC = new core_1.EventEmitter(!1), _this.itemClickedNg = new core_1.EventEmitter(!1), _this.valueChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.itemsSource = new wjcCore.ObservableArray, _this.selectedIndex = 0, _this.created(), _this
}
return __extends(WjMenu, _super), WjMenu.prototype.created = function(){}, WjMenu.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit();
this._attachToControl();
this._updateHeader()
}, WjMenu.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjMenu.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy();
this.listBox.formatItem.removeHandler(this._fmtItem, this);
this.listBox.loadingItems.removeHandler(this._loadingItems, this)
}, Object.defineProperty(WjMenu.prototype, "value", {
get: function()
{
return this._value
}, set: function(value)
{
this._value = value;
value != null && (this.selectedValue = value, this._updateHeader())
}, enumerable: !0, configurable: !0
}), WjMenu.prototype.ngOnChanges = function(changes)
{
var headerChange=changes.header;
headerChange && (this._definedHeader = headerChange.currentValue, this._updateHeader())
}, WjMenu.prototype.ngAfterContentInit = function()
{
this.value = this.value
}, WjMenu.prototype.onItemClicked = function(e)
{
this.value = this.selectedValue;
_super.prototype.onItemClicked.call(this, e)
}, WjMenu.prototype.refresh = function(fullUpdate)
{
fullUpdate === void 0 && (fullUpdate = !0);
_super.prototype.refresh.call(this, fullUpdate);
this._updateHeader()
}, WjMenu.prototype._attachToControl = function()
{
this.listBox.formatItem.addHandler(this._fmtItem, this);
this.listBox.loadingItems.addHandler(this._loadingItems, this);
this.invalidate()
}, WjMenu.prototype._loadingItems = function(s)
{
for (var itemEl, items=s.hostElement.getElementsByClassName('wj-listbox-item'), i=items.length - 1; i >= 0; i--)
itemEl = items[i],
itemEl.textContent = ''
}, WjMenu.prototype._fmtItem = function(s, e)
{
var itemEl,
menuItem,
contentRoot;
e.data instanceof WjMenuItem && (itemEl = e.item, itemEl.textContent = '', menuItem = e.data, contentRoot = menuItem.contentRoot, contentRoot && (itemEl.appendChild(contentRoot), menuItem.added(itemEl)))
}, WjMenu.prototype._updateHeader = function()
{
var selItem,
currentValue,
contentRoot;
this.header = this._definedHeader || '';
selItem = this.selectedItem;
this.value != null && selItem && this.displayMemberPath && (currentValue = null, selItem instanceof WjMenuItem && (contentRoot = selItem.contentRoot, currentValue = contentRoot ? contentRoot.innerHTML : selItem[this.displayMemberPath]), currentValue != null && (this.header += ': <b>' + currentValue + '</b>'))
}, WjMenu
}(wjcInput.Menu);
WjMenu.meta = {
outputs: exports.wjMenuMeta.outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue'], itemClicked: ['value']
}
};
WjMenu.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjMenuMeta.selector, template: exports.wjMenuMeta.template, inputs: exports.wjMenuMeta.inputs, outputs: exports.wjMenuMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjMenu
})
}].concat(exports.wjMenuMeta.providers)
}, ]
}, ];
WjMenu.ctorParameters = function()
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
exports.WjMenu = WjMenu;
exports.wjMenuItemMeta = {
selector: 'wj-menu-item', template: "<div *wjMenuItemTemplateDir><ng-content></ng-content></div>", inputs: ['wjProperty', 'value', 'cmd', 'cmdParam', ], outputs: ['initialized', ], providers: []
};
WjMenuItem = function()
{
function WjMenuItem(elRef, injector, parentCmp, viewContainerRef, domRenderer)
{
this.viewContainerRef = viewContainerRef;
this.domRenderer = domRenderer;
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'itemsSource';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this._ownerMenu = behavior.parentBehavior.directive;
this.created()
}
return WjMenuItem.prototype.created = function(){}, WjMenuItem.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit();
var ownerMenu=this._ownerMenu;
ownerMenu.itemsSource.length == 1 && ownerMenu.selectedIndex < 0 && (ownerMenu.selectedIndex = 0);
ownerMenu.displayMemberPath || (ownerMenu.displayMemberPath = 'header');
ownerMenu.selectedValuePath || (ownerMenu.selectedValuePath = 'value');
ownerMenu.commandPath || (ownerMenu.commandPath = 'cmd');
ownerMenu.commandParameterPath || (ownerMenu.commandParameterPath = 'cmdParam')
}, WjMenuItem.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjMenuItem.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjMenuItem.prototype.added = function(){}, WjMenuItem
}();
WjMenuItem.meta = {
outputs: exports.wjMenuItemMeta.outputs, siblingId: 'menuItemDir'
};
WjMenuItem.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjMenuItemMeta.selector, template: exports.wjMenuItemMeta.template, inputs: exports.wjMenuItemMeta.inputs, outputs: exports.wjMenuItemMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjMenuItem
})
}].concat(exports.wjMenuItemMeta.providers)
}, ]
}, ];
WjMenuItem.ctorParameters = function()
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
}, {
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, ]
};
exports.WjMenuItem = WjMenuItem;
WjMenuItemTemplateDir = function()
{
function WjMenuItemTemplateDir(viewContainerRef, templateRef, elRef, injector, domRenderer, menuItem, menuSeparator)
{
this.viewContainerRef = viewContainerRef;
this.templateRef = templateRef;
this.elRef = elRef;
this.domRenderer = domRenderer;
this.ownerItem = menuItem || menuSeparator;
this.ownerItem.templateDir = this
}
return WjMenuItemTemplateDir.prototype.ngAfterContentInit = function()
{
var self=this;
setTimeout(function()
{
var rootEl=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(null, self.viewContainerRef, self.templateRef, self.domRenderer, !0).rootElement;
self.contentRoot = rootEl;
self.ownerItem.contentRoot = rootEl;
self.ownerItem._ownerMenu.listBox.invalidate();
self.ownerItem._ownerMenu.invalidate()
}, 0)
}, WjMenuItemTemplateDir
}();
WjMenuItemTemplateDir.decorators = [{
type: core_2.Directive, args: [{
selector: '[wjMenuItemTemplateDir]', inputs: ['wjMenuItemTemplateDir']
}, ]
}, ];
WjMenuItemTemplateDir.ctorParameters = function()
{
return [{
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.TemplateRef, decorators: [{
type: core_3.Inject, args: [core_2.TemplateRef, ]
}, {type: core_2.Optional}, ]
}, {
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, {
type: WjMenuItem, decorators: [{
type: core_3.Inject, args: [WjMenuItem, ]
}, {type: core_2.Optional}, ]
}, {
type: WjMenuSeparator, decorators: [{
type: core_3.Inject, args: [core_2.forwardRef(function()
{
return WjMenuSeparator
}), ]
}, {type: core_2.Optional}, ]
}, ]
};
exports.WjMenuItemTemplateDir = WjMenuItemTemplateDir;
exports.wjMenuSeparatorMeta = {
selector: 'wj-menu-separator', template: "<div *wjMenuItemTemplateDir class=\"wj-state-disabled\" style=\"width:100%;height:1px;background-color:lightgray\"></div>", inputs: ['wjProperty', ], outputs: ['initialized', ], providers: []
};
WjMenuSeparator = function(_super)
{
function WjMenuSeparator(elRef, injector, parentCmp, viewContainerRef, domRenderer)
{
var _this=_super.call(this, elRef, injector, parentCmp, viewContainerRef, domRenderer) || this;
return _this.created(), _this
}
return __extends(WjMenuSeparator, _super), WjMenuSeparator.prototype.added = function(toItem)
{
wjcCore.addClass(toItem, 'wj-state-disabled')
}, WjMenuSeparator
}(WjMenuItem);
WjMenuSeparator.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjMenuSeparatorMeta.selector, template: exports.wjMenuSeparatorMeta.template, inputs: exports.wjMenuSeparatorMeta.inputs, outputs: exports.wjMenuSeparatorMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjMenuSeparator
})
}].concat(exports.wjMenuSeparatorMeta.providers)
}, ]
}, ];
WjMenuSeparator.ctorParameters = function()
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
}, {
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, ]
};
exports.WjMenuSeparator = WjMenuSeparator;
exports.wjItemTemplateMeta = {
selector: '[wjItemTemplate]', inputs: ['wjItemTemplate', ], outputs: ['initialized', ], exportAs: 'wjItemTemplate', providers: []
};
WjItemTemplate = function()
{
function WjItemTemplate(elRef, injector, parentCmp, viewContainerRef, templateRef, domRenderer, cdRef)
{
this.viewContainerRef = viewContainerRef;
this.templateRef = templateRef;
this.domRenderer = domRenderer;
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.ownerControl = behavior.parentBehavior.directive;
this.listBox = WjItemTemplate._getListBox(this.ownerControl);
this._cdRef = cdRef;
this.created()
}
return WjItemTemplate.prototype.created = function(){}, WjItemTemplate.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit();
this._attachToControl()
}, WjItemTemplate.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjItemTemplate.prototype.ngOnDestroy = function()
{
var ownerControl=this.ownerControl,
listBox=this.listBox;
listBox && (listBox.formatItem.removeHandler(this._fmtItem, this), listBox.loadingItems.removeHandler(this._loadingItems, this));
ownerControl && ownerControl.invalidate()
}, WjItemTemplate.prototype._attachToControl = function()
{
this.listBox.formatItem.addHandler(this._fmtItem, this);
this.listBox.loadingItems.addHandler(this._loadingItems, this);
this.ownerControl.invalidate()
}, WjItemTemplate.prototype._loadingItems = function()
{
this.viewContainerRef.clear()
}, WjItemTemplate.prototype._fmtItem = function(s, e)
{
var itemEl=e.item,
viewRef;
itemEl.textContent = '';
viewRef = this._instantiateTemplate(itemEl);
viewRef.context.control = s;
viewRef.context.item = e.data;
viewRef.context.itemIndex = e.index;
e.index === this.listBox.collectionView.items.length - 1 && this._cdRef.detectChanges()
}, WjItemTemplate.prototype._instantiateTemplate = function(parent)
{
return wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(parent, this.viewContainerRef, this.templateRef, this.domRenderer).viewRef
}, WjItemTemplate._getListBox = function(ownerControl)
{
return ownerControl ? ownerControl instanceof wjcInput.ListBox ? ownerControl : ownerControl.listBox : null
}, WjItemTemplate
}();
WjItemTemplate.meta = {
outputs: exports.wjItemTemplateMeta.outputs, parentRefProperty: 'owner'
};
WjItemTemplate.decorators = [{
type: core_2.Directive, args: [{
selector: exports.wjItemTemplateMeta.selector, inputs: exports.wjItemTemplateMeta.inputs, outputs: exports.wjItemTemplateMeta.outputs, exportAs: exports.wjItemTemplateMeta.exportAs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjItemTemplate
})
}].concat(exports.wjItemTemplateMeta.providers)
}, ]
}, ];
WjItemTemplate.ctorParameters = function()
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
}, {
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.TemplateRef, decorators: [{
type: core_3.Inject, args: [core_2.TemplateRef, ]
}, {type: core_2.Optional}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, {
type: core_3.ChangeDetectorRef, decorators: [{
type: core_3.Inject, args: [core_3.ChangeDetectorRef, ]
}, ]
}, ]
};
exports.WjItemTemplate = WjItemTemplate;
exports.wjPopupMeta = {
selector: 'wj-popup', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'owner', 'showTrigger', 'hideTrigger', 'fadeIn', 'fadeOut', 'dialogResultEnter', 'modal', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'showingNg: showing', 'shownNg: shown', 'hidingNg: hiding', 'hiddenNg: hidden', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjPopup = function(_super)
{
function WjPopup(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.showingNg = new core_1.EventEmitter(!1), _this.shownNg = new core_1.EventEmitter(!1), _this.hidingNg = new core_1.EventEmitter(!1), _this.hiddenNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjPopup, _super), WjPopup.prototype.created = function(){}, WjPopup.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPopup.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPopup.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPopup.prototype.ngOnChanges = function(changes)
{
var ownerChange=changes.owner;
ownerChange && this.modal == null && (this.modal = this.owner ? !1 : !0)
}, WjPopup.prototype.dispose = function()
{
this.isVisible && (this.hiding.removeAllHandlers(), this.fadeOut = !1, this.hide());
_super.prototype.dispose.call(this)
}, WjPopup
}(wjcInput.Popup);
WjPopup.meta = {outputs: exports.wjPopupMeta.outputs};
WjPopup.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjPopupMeta.selector, template: exports.wjPopupMeta.template, inputs: exports.wjPopupMeta.inputs, outputs: exports.wjPopupMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPopup
})
}].concat(exports.wjPopupMeta.providers)
}, ]
}, ];
WjPopup.ctorParameters = function()
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
exports.WjPopup = WjPopup;
WjContextMenu = function()
{
function WjContextMenu(elRef)
{
this.elRef = elRef
}
return WjContextMenu.prototype.onContextMenu = function(e)
{
var menu=this.wjContextMenu,
dropDown=menu.dropDown;
menu && dropDown && !wjcCore.closest(e.target, '[disabled]') && (e.preventDefault(), menu.owner = this.elRef.nativeElement, menu.selectedIndex = -1, menu.onIsDroppedDownChanging(new wjcCore.CancelEventArgs) && (wjcCore.showPopup(dropDown, e), menu.onIsDroppedDownChanged(), dropDown.focus()))
}, WjContextMenu
}();
WjContextMenu.decorators = [{
type: core_2.Directive, args: [{
selector: '[wjContextMenu]', inputs: ['wjContextMenu'], exportAs: 'wjContextMenu', host: {'(contextmenu)': 'onContextMenu($event)'}
}, ]
}, ];
WjContextMenu.ctorParameters = function()
{
return [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, ]
};
exports.WjContextMenu = WjContextMenu;
exports.wjCollectionViewNavigatorMeta = {
selector: 'wj-collection-view-navigator', template: "<div class=\"wj-control wj-content wj-pager\">\n                <div class=\"wj-input-group\">\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToFirst()\"\n                           [disabled]=\"!cv || cv?.currentPosition <= 0\">\n                            <span class=\"wj-glyph-left\" style=\"margin-right: -4px;\"></span>\n                            <span class=\"wj-glyph-left\"></span>\n                         </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                       <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToPrevious()\"\n                           [disabled]=\"!cv || cv?.currentPosition <= 0\">\n                            <span class=\"wj-glyph-left\"></span>\n                       </button>\n                    </span>\n                    <input type=\"text\" class=\"wj-form-control\" \n                           value=\"{{cv?.currentPosition + 1 | number}} / {{cv?.itemCount | number}}\" \n                           disabled />\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToNext()\"\n                           [disabled]=\"!cv || cv?.currentPosition >= cv?.itemCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                        </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToLast()\"\n                           [disabled]=\"!cv || cv?.currentPosition >= cv?.itemCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                            <span class=\"wj-glyph-right\" style=\"margin-left: -4px;\"></span>\n                        </button>\n                    </span>\n                </div>\n            </div>", inputs: ['wjModelProperty', 'cv', ], outputs: ['initialized', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjCollectionViewNavigator = function()
{
function WjCollectionViewNavigator(elRef, injector, parentCmp)
{
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return WjCollectionViewNavigator.prototype.created = function(){}, WjCollectionViewNavigator.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjCollectionViewNavigator.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjCollectionViewNavigator.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjCollectionViewNavigator
}();
WjCollectionViewNavigator.meta = {outputs: exports.wjCollectionViewNavigatorMeta.outputs};
WjCollectionViewNavigator.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjCollectionViewNavigatorMeta.selector, template: exports.wjCollectionViewNavigatorMeta.template, inputs: exports.wjCollectionViewNavigatorMeta.inputs, outputs: exports.wjCollectionViewNavigatorMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjCollectionViewNavigator
})
}].concat(exports.wjCollectionViewNavigatorMeta.providers)
}, ]
}, ];
WjCollectionViewNavigator.ctorParameters = function()
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
exports.WjCollectionViewNavigator = WjCollectionViewNavigator;
exports.wjCollectionViewPagerMeta = {
selector: 'wj-collection-view-pager', template: "<div class=\"wj-control wj-content wj-pager\" >\n                <div class=\"wj-input-group\">\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToFirstPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex <= 0\">\n                            <span class=\"wj-glyph-left\" style=\"margin-right: -4px;\"></span>\n                            <span class=\"wj-glyph-left\"></span>\n                        </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                    <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToPreviousPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex <= 0\">\n                            <span class=\"wj-glyph-left\"></span>\n                        </button>\n                    </span>\n                    <input type=\"text\" class=\"wj-form-control\" \n                           value=\"{{cv?.pageIndex + 1 | number}} / {{cv?.pageCount | number}}\" \n                           disabled />\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToNextPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex >= cv?.pageCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                        </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToLastPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex >= cv?.pageCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                            <span class=\"wj-glyph-right\" style=\"margin-left: -4px;\"></span>\n                        </button>\n                    </span>\n                </div>\n            </div>", inputs: ['wjModelProperty', 'cv', ], outputs: ['initialized', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjCollectionViewPager = function()
{
function WjCollectionViewPager(elRef, injector, parentCmp)
{
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return WjCollectionViewPager.prototype.created = function(){}, WjCollectionViewPager.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjCollectionViewPager.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjCollectionViewPager.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjCollectionViewPager
}();
WjCollectionViewPager.meta = {outputs: exports.wjCollectionViewPagerMeta.outputs};
WjCollectionViewPager.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjCollectionViewPagerMeta.selector, template: exports.wjCollectionViewPagerMeta.template, inputs: exports.wjCollectionViewPagerMeta.inputs, outputs: exports.wjCollectionViewPagerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjCollectionViewPager
})
}].concat(exports.wjCollectionViewPagerMeta.providers)
}, ]
}, ];
WjCollectionViewPager.ctorParameters = function()
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
exports.WjCollectionViewPager = WjCollectionViewPager;
moduleExports = [WjComboBox, WjAutoComplete, WjCalendar, WjColorPicker, WjInputMask, WjInputColor, WjMultiSelect, WjMultiAutoComplete, WjInputNumber, WjInputDate, WjInputTime, WjInputDateTime, WjListBox, WjMenu, WjMenuItem, WjMenuSeparator, WjItemTemplate, WjPopup, WjContextMenu, WjCollectionViewNavigator, WjCollectionViewPager];
WjInputModule = function()
{
function WjInputModule(){}
return WjInputModule
}();
WjInputModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.concat([WjMenuItemTemplateDir]), exports: moduleExports.slice()
}, ]
}, ];
WjInputModule.ctorParameters = function()
{
return []
};
exports.WjInputModule = WjInputModule
})