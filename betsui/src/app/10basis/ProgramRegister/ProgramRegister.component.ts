import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ProgramRegisterService} from "./ProgramRegister.service";
import {NotificationService} from "../../shared/utils/notification.service";
import {ProgramRegister} from "./ProgramRegister.model";
import {concat} from "rxjs/observable/concat";


@FadeInTop()
@Component({
    selector: 'ProgramRegister',
    templateUrl: './ProgramRegister.component.html',
    providers: [ProgramRegisterService,ProgramRegister]
})
export class ProgramRegisterComponent{

}
