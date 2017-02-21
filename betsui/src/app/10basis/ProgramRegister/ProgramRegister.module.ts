import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProgramRegisterRouting} from "./ProgramRegister.routing";
import {ProgramRegisterComponent} from "./ProgramRegister.component";

@NgModule({
    imports: [
        CommonModule,
        ProgramRegisterRouting,
        SmartadminModule,

        // BETS ADDED
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ProgramRegisterComponent]
})
export class ProgramRegisterModule {
}
