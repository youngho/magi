import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {ProgramRegisterService} from "./ProgramRegister.service";
import {ProgramRegister} from "../ProgramRegister.model";


/**
 * 1. File name     : ProgramRegister.component.ts
 * 2. Discription   : 프로그램 레지스터 등록화면 실제 등록 부분을 수정부분과 공유(import)하여 사용한다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'ProgramRegister',
    templateUrl: './ProgramRegister.component.html',
    providers: [ProgramRegisterService,ProgramRegister]
})
export class ProgramRegisterComponent{

}
