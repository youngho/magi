"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yhkim on 2017-02-20.
 */
var core_1 = require('@angular/core');
var DatatableComponent = (function () {
    function DatatableComponent(injector) {
        this.injector = injector;
        this.tblOptions = {};
        this.tblOptions = this.injector.get('options');
        //console.log('looking for options in admin apps')
        console.log(this.tblOptions);
    }
    DatatableComponent = __decorate([
        core_1.Component({
            selector: "adminAppsHtml",
            template: "<sa-widget [editbutton]=\"false\" color=\"blueDark\">\n\t<header>\n\t\t<span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n\t\t<h2>SUB BIN yield Retrieve Result</h2>\n\t</header>\n\t<div>\n\t\t<div class=\"widget-body no-padding\">\n\n\t\t\t<sa-datatable [options]=\"tblOptions\" filter=\"true\" tableClass=\"table table-striped table-bordered table-hover\">\n\t\t\t\t<thead>\n\t\t\t\t<tr>\n                  <th class=\"hasinput\"><input type=\"text\" class=\"form-control\" placeholder=\"Filter Date\"/>\n                  </th>\n                  <th class=\"hasinput\"><input type=\"text\" class=\"form-control\" placeholder=\"Filter Part Number\"/>\n                  </th>\n                  <th class=\"hasinput\"><input type=\"text\" class=\"form-control\" placeholder=\"Filter Lot Number\"/>\n                  </th>\n                  <th class=\"hasinput\"><input type=\"text\" class=\"form-control\" placeholder=\"Process Code\"/>\n                  </th>\n                  <th class=\"hasinput\"><input type=\"text\" class=\"form-control\" placeholder=\"Test Counter\"/>\n                  </th>\n\n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Tester\"/>\n                  </th>                  \n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Head\"/>\n                  </th>                  \n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Board ID\"/>\n                  </th>                  \n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"BIN1\"/>\n                  </th>\n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"BIN2\"/>\n                  </th>\n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"BIN3\"/>\n                  </th>\n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"BIN4\"/>\n                  </th>\n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"BIN5\"/>\n                  </th>\n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"BIN6\"/>\n                  </th>\n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"BIN7\"/>\n                  </th>\n                  <th class=\"hasinput\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"BIN8\"/>\n                  </th>\n                  <th class=\"hasinput\">\n                    <input type=\"text\" width=\"4\" class=\"form-control\" placeholder=\"BIN9\"/>\n                  </th>\n                </tr>\n                \n                \n                \n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<!--<th [style.width]=\"'8%'\" data-hide=\"mobile-p\">Date</th>-->\n\t\t\t\t\t\t<th [style.width]=\"'8%'\">Date</th>\n\t\t\t\t\t\t<th [style.width]=\"'16%'\" data-class=\"expand\" >Part Number</th>\n\t\t\t\t\t\t<th>Lot Number</th>\n\t\t\t\t\t\t<th >Process Code</th>\n\t\t\t\t\t\t<th>Test Counter</th>\n\t\t\t\t\t\t<th>Tester</th>\n\t\t\t\t\t\t<th>Tester Head</th>\n\t\t\t\t\t\t<th >Boart ID</th>\n\t\t\t\t\t\t<th [style.width]=\"'1%'\">BIN1</th>\n\t\t\t\t\t\t<th [style.width]=\"'1%'\">BIN2</th>\n\t\t\t\t\t\t<th [style.width]=\"'1%'\">BIN3</th>\n\t\t\t\t\t\t<th [style.width]=\"'1%'\">BIN4</th>\n\t\t\t\t\t\t<th [style.width]=\"'1%'\">BIN5</th>\n\t\t\t\t\t\t<th [style.width]=\"'1%'\">BIN6</th>\n\t\t\t\t\t\t<th [style.width]=\"'1%'\">BIN7</th>\n\t\t\t\t\t\t<th [style.width]=\"'1%'\">BIN8</th>\n\t\t\t\t\t\t<th [style.width]=\"'1%'\">BIN9</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n<!--\t\t\t\t<tfoot>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>User ID</th>\n\t\t\t\t\t\t<th>Post ID</th>\n\t\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t\t<th>Body</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</tfoot>-->\n\t\t\t</sa-datatable>\n\n\t\t</div>\n\t</div>\n</sa-widget>\n"
        })
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
