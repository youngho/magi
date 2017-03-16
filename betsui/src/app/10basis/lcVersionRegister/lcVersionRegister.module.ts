import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule} from "@angular/forms";
import {LcVersionRegisterRouting} from "./lcVersionRegister.routing";
import {LcVersionRegisterComponent} from "./lcVersionRegister.component";
import {SmartadminValidationModule} from "../../shared/forms/validation/smartadmin-validation.module";

@NgModule({
    imports: [
        CommonModule,
        LcVersionRegisterRouting,
        SmartadminModule,

        // BETS ADDED
        FormsModule,
        //ReactiveFormsModule
        SmartadminValidationModule
    ],
    declarations: [LcVersionRegisterComponent]
})
export class LcVersionRegisterModule {
}
