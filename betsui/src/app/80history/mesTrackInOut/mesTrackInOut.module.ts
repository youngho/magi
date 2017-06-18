import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {MesTrackInOutComponent} from "./mesTrackInOut.component";
import {MesTrackInOutRouting} from "./mesTrackInOut.routing";

import {LoadingModule} from "ngx-loading";

/**
 * 1. File name     : mesTrackInOut.module.ts
 * 2. Discription   : Process 로직에서 MES와 통신한 이력을 보여주는 화면이다.
 * 3. writer        : yhkim     2017.02.17
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0802 : Mes Track In Out
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        MesTrackInOutRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [MesTrackInOutComponent]
})
export class MesTrackInOutModule {
}
