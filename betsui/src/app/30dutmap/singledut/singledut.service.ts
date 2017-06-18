import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {SingleDut} from "./singledut.model";

/**
 * 1. File name     : singledut.service.ts
 * 2. Discription   : CASI_BIN 테이블에서 SHOT 별로 DUT의 결과를 보여준다
 *                    DUT_MAIN_BIN 컬럼에 들어 있는 BIN 문자열을 파싱하여 표(DUT Map) 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0301 : Single DUT map
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class SingleDutService {
    private path: string;

    constructor(private api: ApiService) {
    }

    postLastTable(data: SingleDut) {
        this.path = 'retrieveSingleDutMap';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}