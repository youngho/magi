"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yhkim on 2017-02-17.
 */
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var YieldAbnormalService = (function () {
    function YieldAbnormalService(api) {
        this.api = api;
        this.path = 'retireveSingleDut';
    }
    YieldAbnormalService.prototype.postLastTable = function (data) {
        console.log('saving post:' + data.lotNumber);
        console.log('PATH : ' + this.path);
        return this.api.retrievePost("" + this.path, data);
    };
    YieldAbnormalService = __decorate([
        core_1.Injectable()
    ], YieldAbnormalService);
    return YieldAbnormalService;
}());
exports.YieldAbnormalService = YieldAbnormalService;
