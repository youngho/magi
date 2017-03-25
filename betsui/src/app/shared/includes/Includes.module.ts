import {NgModule} from "@angular/core";
import {ProgramRegisterViewComponent} from "../../shared/includes/ProgramRegisterView.component"
import {SmartadminModule} from "../smartadmin.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminValidationModule} from "../forms/validation/smartadmin-validation.module";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SmartadminValidationModule,
        SmartadminModule
    ],
    declarations: [ProgramRegisterViewComponent],
    exports: [ProgramRegisterViewComponent]

})
export class IncludesModule {
}
