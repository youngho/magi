"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require("rxjs/add/operator/map");
var LastTableEventService = (function () {
    function LastTableEventService(api) {
        this.api = api;
        this.path = 'lastTableEvent';
    }
    /*
     constructor(private http:Http){

     }
     */
    /*
     getAuthority(){
     return this.http.get('/authority')
     .map(res=>res.json());
     }
     */
    LastTableEventService.prototype.postLastTableEvent = function (data) {
        console.log('saving post:' + data);
        return this.api.post("" + this.path, data);
    };
    LastTableEventService = __decorate([
        core_1.Injectable()
    ], LastTableEventService);
    return LastTableEventService;
}());
exports.LastTableEventService = LastTableEventService;
