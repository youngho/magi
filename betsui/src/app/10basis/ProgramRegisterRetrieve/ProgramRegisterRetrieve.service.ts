import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {ProgramRegister} from "../ProgramRegister.model";
/**
 * 1. File name     : ProgramRegisterRetrieve.service.ts
 * 2. Discription   : 기본 테스트 프로그램 정보를 조회 수정한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class ProgramRegisterRetrieveService {

    private path: string = '';

    constructor(private api: ApiService) {
    }

    postRetrieveByKey(data) {
        this.path = 'retrieveProgramRegisterByKey';
        console.log('service Component post :');
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrieve(data) {
        this.path = 'retrieveProgramRegister';
        console.log('service Component post :');
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: ProgramRegister) {
        this.path = 'insertProgramRegister';
        console.log('saving post:' + data.customer);
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}