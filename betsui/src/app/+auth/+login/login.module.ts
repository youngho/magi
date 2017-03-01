import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";
import {AlertService} from "../../core/services/alert.service";
import {AuthenticationService} from "../../core/services/authentication.service";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        // BETS ADDED
        SmartadminFormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent],
    providers: [
        AlertService,
        AuthenticationService,
    ]

})
export class LoginModule {
}
