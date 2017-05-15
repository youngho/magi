import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {TdbiComponent} from "./tdbi.component";
import {TdbiRouting} from "./tdbi.routing";
/**
 * BETS-UI-0702
 * TDBI RAW Data
 * TDBI 공정에서 발생한 RAW Data를 조회한다
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        TdbiRouting,
        SmartadminModule,
    ],
    declarations: [TdbiComponent]
})
export class TdbiModule {
}
