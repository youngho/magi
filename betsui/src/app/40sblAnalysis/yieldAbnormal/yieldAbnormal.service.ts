import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {YieldAbnormal} from "./yieldAbnormal.model";
import {UserUsage} from "../../shared/usage/userUsage.model";

/**
 * 1. File name     : yieldAbnormal.service.ts
 * 2. Discription   : Abnormal 목록을 조회힌다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0401 : Yield Abnormal
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class YieldAbnormalService {
    private path: string;

    constructor(private api: ApiService) {
    }

    retrieve(data: YieldAbnormal) {
        this.path = 'retrieveYieldAbnormal';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}