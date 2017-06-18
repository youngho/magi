import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import {BinDescriptionComponent} from "./BinDescription.component";
import {BinDescriptionRouting} from "./BinDescription.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : BinDescription.module.ts
 * 2. Discription   : BIN 에 대한 설명을 관리한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        BinDescriptionRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [BinDescriptionComponent]
})
export class BinDescriptionModule {
}
