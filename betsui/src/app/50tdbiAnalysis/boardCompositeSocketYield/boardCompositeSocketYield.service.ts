/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {BoardCompositeSocketYield} from "./boardCompositeSocketYield.model";
/**
 * 1. File name     : boardCompositeSocketYield.service.ts
 * 2. Discription   : 특정 보드의 기간동안 소켓의 수율을 보여준다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class BoardCompositeSocketYieldService {
    private path: string;

    constructor(private api: ApiService) {
    }

    postLastTable(data: BoardCompositeSocketYield) {
        this.path = 'retrieveBoardCompositeSocketYield';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}