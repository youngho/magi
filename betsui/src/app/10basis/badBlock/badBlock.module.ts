import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule} from "@angular/forms";
import {BadBlockRouting} from "./badBlock.routing";
import {BadBlockComponent} from "./badBlock.component";
import {SmartadminValidationModule} from "../../shared/forms/validation/smartadmin-validation.module";
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        BadBlockRouting,
        SmartadminModule,

        // BETS ADDED
        FormsModule,
        //ReactiveFormsModule
        SmartadminValidationModule
    ],
    declarations: [BadBlockComponent]
})
export class BadBlockModule {
}
