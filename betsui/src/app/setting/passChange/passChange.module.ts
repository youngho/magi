import {NgModule} from "@angular/core";
import {PassChangeComponent} from "./passChange.component"
import {SmartadminModule} from "../../shared/smartadmin.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminValidationModule} from "../../shared/forms/validation/smartadmin-validation.module";
import {PassChangeRouting} from "./passChange.routing";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SmartadminValidationModule,
        SmartadminModule,
        PassChangeRouting
    ],
    declarations: [PassChangeComponent],

})
export class PassChangeModule {
}
