import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {Lotyield} from "./lotyield.model";

/**
 * 1. File name     : lotyield.service.ts
 * 2. Discription   : LOT YIELD SUMMARY(COMPOSITE) - BETS-UI-0201
 *                    특정기간 모든 LOTS, OP_BIN, YIELD, SUMMARY
 *                    MAIN_BIN 테이블의 TESTER_COUNTER 컬럼의 숫자가 0,1,2,OP_BIN(9999)로 들어온다.(분류조건)
 *                    MAIN_BIN 테이블에 있는 OP_BIN 컬럼 값에 BIN1 ~ BIN9가 들어있다.(콤마로 구분되어 있음)
 *                    각 BIN의 값을 보여주고 전체합, 패스빈값들의 합, YIELD를 보여준다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class lotyieldService {

    constructor(private api: ApiService) {
    }

    private path: string;

    postLastTable(data: Lotyield) {
        this.path = 'retrieveLotYield';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }

}