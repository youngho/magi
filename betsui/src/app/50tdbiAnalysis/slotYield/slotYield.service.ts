import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {SlotYield} from "./slotYield.model";
/**
 * 1. File name     : slotYield.service.ts
 * 2. Discription   : BURN_IN_BOARD_MAP 테이블에서 Slot 별로 BIN의 결과를 보여준다
 *                    BI_SOCKET_NUMBER 컬럼에 들어 있는 BIN 문자열을 파싱하여 BIN별로 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0504 : Slot Yield
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class SlotYieldService {
    private path: string;

    constructor(private api: ApiService) {
    }

    retrieveService(data: SlotYield) {
        this.path = 'retrieveSlotYield';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}