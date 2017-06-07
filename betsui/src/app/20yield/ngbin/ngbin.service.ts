import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {NgBin} from "./ngbin.model";
import {UserUsage} from "../../shared/usage/userUsage.model";
/**
 * BETS-UI-0202 : NG bin
 * NG_BIN 테이블의 TESTER_COUNTER의 숫자가 0,1,2,OP_BIN(9999) 로들어온다.(분류조건)
 * NG_BIN 테이블에 있는 NG_BIN(SUB_BIN)(1~999)의 값의 각 NG_BIN숫자별로 몇개씩 나왔는지 보여준다.
 */
@Injectable()
export class NgBinService {
    private path: string;

    constructor(private api: ApiService) {}

    postLastTable(data: NgBin) {
        this.path = 'retrieveNgBinJson';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}