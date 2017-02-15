"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ng2_translate_1 = require('ng2-translate');
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, './assets/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var MyMissingTranslationHandler = (function () {
    function MyMissingTranslationHandler() {
    }
    MyMissingTranslationHandler.prototype.handle = function (key) {
        return 'missing key: [' + key + ']';
    };
    return MyMissingTranslationHandler;
}());
exports.MyMissingTranslationHandler = MyMissingTranslationHandler;
// import en from './en.json';
// import zh from './zh.json';
// const translations = { 'en': en, 'zh': zh };
// class CustomLoader implements TranslateLoader {
//   getTranslation(lang: string): Observable<any> {
//     return Observable.of(translations[lang]);
//   }
// }
//TranslateModule.forRoot({ provide: TranslateLoader, useClass: CustomLoader })
var AppTranslateModule = (function () {
    function AppTranslateModule() {
    }
    AppTranslateModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                ng2_translate_1.TranslateModule.forRoot({
                    provide: ng2_translate_1.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [http_1.Http]
                })
            ],
            exports: [ng2_translate_1.TranslateModule],
            providers: [
                { provide: ng2_translate_1.MissingTranslationHandler, useClass: MyMissingTranslationHandler }
            ],
        })
    ], AppTranslateModule);
    return AppTranslateModule;
}());
exports.AppTranslateModule = AppTranslateModule;
