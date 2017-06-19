import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {BoardYield} from "./boardYield.model";
/**
 * 1. File name     : boardYield.service.ts
 * 2. Discription   : Board 별 Yield 를 보여주는 화면
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0505 : Board Yield
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@Injectable()
export class BoardYieldService {
    private path: string;

    constructor(private api: ApiService) {
    }

    retrieveService(data: BoardYield) {
        this.path = 'retrieveBoardYield';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}