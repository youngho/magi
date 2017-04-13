import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {ProgramRegisterService} from "./ProgramRegister.service";
import {ProgramRegister} from "../ProgramRegister.model";



@FadeInTop()
@Component({
    selector: 'ProgramRegister',
    templateUrl: './ProgramRegister.component.html',
    providers: [ProgramRegisterService,ProgramRegister]
})
export class ProgramRegisterComponent{

}
