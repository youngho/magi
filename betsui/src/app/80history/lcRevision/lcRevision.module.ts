import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {LcRevisionComponent} from "./lcRevision.component";
import {LcRevisionRouting} from "./lcRevision.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : lcRevision.model.ts
 * 2. Discription   : LC 이력을 조회하는 화면이다. 사실상 LC관련 입력 업무가 없기 때문에 사용하지 않는 화면이다.
 * 3. writer        : yhkim     2017.02.17
 * 4. modifier      :
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        LcRevisionRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [LcRevisionComponent]
})
export class LcRevisionModule {
}
