import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProgramRegisterRouting} from "./ProgramRegister.routing";
import {ProgramRegisterComponent} from "./ProgramRegister.component";

import {SmartadminValidationModule} from "../../shared/forms/validation/smartadmin-validation.module";
import {IncludesModule} from "../../shared/includes/Includes.module";

@NgModule({
    imports: [
        CommonModule,
        ProgramRegisterRouting,
        SmartadminModule,
        FormsModule,
        ReactiveFormsModule,
        SmartadminValidationModule,
        IncludesModule,
    ],
    declarations: [ProgramRegisterComponent],
    exports: []
})
export class ProgramRegisterModule {
}
