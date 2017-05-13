import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {TestTimeRouting} from "./testTime.routing";
import {TestTimeComponent} from "./testTime.component";


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
