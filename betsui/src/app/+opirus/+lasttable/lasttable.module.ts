import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {lastTableRouting} from './lasttable.routing';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {LastTableComponent} from "./lasttable.component";

@NgModule({
    imports: [
        CommonModule,
        lastTableRouting,
        SmartadminModule
    ],
    declarations: [LastTableComponent]
})
export class LastTableModule {
}
