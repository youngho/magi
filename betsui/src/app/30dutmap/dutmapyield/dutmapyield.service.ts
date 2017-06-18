import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {DutMapYield} from "./dutmapyield.model";
/**
 * 1. File name     : dutmapyield.service.ts
 * 2. Discription   : BETS-UI-0303
 *                    DUT Map Yiled
 *                    BIN Selection 이 정해지지 않을 경우에는 PASS BIN의 비율을 보여준다
 *                    BIN Selection 에서 선택한 BIN의 비율을 보여준다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class DutMapYieldService {
    private path: string;

    constructor(private api: ApiService) {}

    postRetrieve(data: DutMapYield) {
        this.path = 'retrieveDutMapYield';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}