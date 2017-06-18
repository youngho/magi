import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {TestLotCancel} from "./testLotCancel.model";

/**
 * 1. File name     : testLotCancel.component.ts
 * 2. Discription   : CANCEL_BIN 테이블에서 조회한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0402 : Test Lot Cancel
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class TestLotCancelService {
    private path: string;

    constructor(private api: ApiService) {}

    postLastTable(data: TestLotCancel) {
        this.path = 'retrieveTestLotCancel';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}