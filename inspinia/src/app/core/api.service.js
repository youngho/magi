"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var ApiService = (function () {
    function ApiService(http /*, @Inject(APP_CONFIG) config: AppConfig*/) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        this.API_URL = 'http://localhost:8080/';
        //this.API_URL = config.apiEndpoint;
    }
    ApiService.prototype.get = function (path, term) {
        console.log('get resources from url:' + ("" + this.API_URL + path));
        var search = new http_1.URLSearchParams();
        if (term) {
            Object.keys(term).forEach(function (key) { return search.set(key, term[key]); });
        }
        return this.http.get("" + this.API_URL + path, { search: search, headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.post = function (path, data) {
        console.log('잇힝' + path);
        var body = JSON.stringify(data);
        return this.http.post("" + this.API_URL + path, body, { headers: this.headers })
            .catch(this.handleError);
    };
    ApiService.prototype.put = function (path, data) {
        var body = JSON.stringify(data);
        return this.http.put("" + this.API_URL + path, body, { headers: this.headers })
            .catch(this.handleError);
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + this.API_URL + path, { headers: this.headers })
            .catch(this.handleError);
    };
    ApiService.prototype.setHeaders = function (headers) {
        var _this = this;
        Object.keys(headers).forEach(function (header) { return _this.headers.set(header, headers[header]); });
    };
    ApiService.prototype.setHeader = function (key, value) {
        this.headers.set(key, value);
    };
    ApiService.prototype.deleteHeader = function (key) {
        if (this.headers.has(key)) {
            this.headers.delete(key);
        }
        else {
            console.log("header:" + key + " not found!");
        }
    };
    ApiService.prototype.extractData = function (res) {
        if (res.status >= 200 && res.status <= 300) {
            return res.json() || {};
        }
        return res;
    };
    ApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        // let errMsg = (error.message) ? error.message :
        //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        // console.error(errMsg); // log to console instead
        console.log(error);
        return Rx_1.Observable.throw(error);
    };
    ApiService = __decorate([
        core_1.Injectable()
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
