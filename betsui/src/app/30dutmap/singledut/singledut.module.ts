import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {SingleDutComponent} from "./singledut.component";
import {SingleDutRouting} from "./singledut.routing";

import {LoadingModule} from "ngx-loading";

/**
 * 1. File name     : singledut.module.ts
 * 2. Discription   : CASI_BIN 테이블에서 SHOT 별로 DUT의 결과를 보여준다
 *                    DUT_MAIN_BIN 컬럼에 들어 있는 BIN 문자열을 파싱하여 표(DUT Map) 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0301 : Single DUT map
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        SingleDutRouting,
        SmartadminModule,
        LoadingModule
    ],
    declarations: [SingleDutComponent]
})
export class SingleDutModule {
}
