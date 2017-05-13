import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {TestTimeRouting} from "./testTime.routing";
import {TestTimeComponent} from "./testTime.component";

/**
 * BETS-UI-0602
 * Test Time
 * mainProgramName 의 변경이력에 대한 CASI_BIN 의 testTime을 보여준다.
 * testTime = shotEndTime - shotStartTime으로 같은 프로그램으로 되어 있는 목록에서 Average, MinTime, MaxTime 의 testTime을 구해서 보여준다.
 */
@NgModule({
    imports: [
        CommonModule,
        TestTimeRouting,
        SmartadminModule,
        SmartadminInputModule,
        // BETS ADDED
        WjInputModule, WjGridModule, WjGridFilterModule,
    ],
    declarations: [TestTimeComponent]
})
export class TestTimeModule {
}
