import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {User} from "./user.model";

/**
 * 1. File name     : register.service.ts
 * 2. Discription   : 사용자 관리화면
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0901 : User Authorization
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class RegisterService {

    private path: string = 'user/retrieveRegister';

    constructor(private api: ApiService) {
    }

    postRetrieve(data: User) {
        this.path = 'user/retrieveRegister';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: User) {
        this.path = 'user/insertRegister';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

}