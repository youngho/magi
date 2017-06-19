import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {DataSummaryComponent} from "./dataSummary.component";
import {DataSummaryRouting} from "./dataSummary.routing";

import {LoadingModule} from "ngx-loading";
/**
 * 1. File name     : dataSummary.module.ts
 * 2. Discription   : TDBI Data Summary
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0501 : Data Summary
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        DataSummaryRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [DataSummaryComponent]
})
export class DataSummaryModule {
}
