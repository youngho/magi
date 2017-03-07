import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule} from "@angular/forms";
import {ProgramRegisterRouting} from "./ProgramRegister.routing";
import {ProgramRegisterComponent} from "./ProgramRegister.component";
import {SmartadminValidationModule} from "../../shared/forms/validation/smartadmin-validation.module";

@NgModule({
    imports: [
        CommonModule,
        ProgramRegisterRouting,
        SmartadminModule,

        // BETS ADDED
        FormsModule,
        //ReactiveFormsModule
        SmartadminValidationModule
    ],
    declarations: [ProgramRegisterComponent]
})
export class ProgramRegisterModule {
}
