import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {CompoDut} from "./compodut.model";

/**
 * 1. File name     : compodut.service.ts
 * 2. Discription   : BETS-UI-0302
 *                    Composite DUT Map
 *                    CASI_BIN 테이블의 DUT_MAIN_BIN 에 들어 있는 DUT의 정보를 BIN별로 분류하여 PASS BIN의 비율을 보여준다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class CompoDutService {
    private path: string;

    constructor(private api: ApiService) {}

    postRetrieve(data: CompoDut) {
        this.path = 'retrieveCompoDutMap';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}