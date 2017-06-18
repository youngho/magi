import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";

/**
 * 1. File name     : userUsage.service.ts
 * 2. Discription   : 사용자 이력화면이다. 사용자 이력정보는 각 화면이 Init되는 시점에 UserUsage 서비스를 호출하여 자신의 화면 아이디를 시간과 함께 저장한다. 이렇게 저장된 내역을 조회하는 화면이다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0803 : Test Program Revision
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class UserUsageService {
    private path: string;

    constructor(private api: ApiService) {}

    postRetrieve(data) {
        this.path = 'retrieveComUserUsage';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}