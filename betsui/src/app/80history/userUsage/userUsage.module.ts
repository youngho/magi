import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';

import {UserUsageComponent} from "./userUsage.component";
import {UserUsageRouting} from "./userUsage.routing";

@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        UserUsageRouting,
        SmartadminModule,
    ],
    declarations: [UserUsageComponent]
})
export class UserUsageModule {
}
