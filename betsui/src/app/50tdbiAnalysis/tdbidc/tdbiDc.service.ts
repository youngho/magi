import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {TdbiDc} from "./tdbiDc.model";
/**
 * 1. File name     : tdbiDc.service.ts
 * 2. Discription   : TDBI DC 조회
 * 3. writer        : yhkim     2017.06.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0506 : TDBI DC Retrieve
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@Injectable()
export class TdbiDcService {
    private path: string;

    constructor(private api: ApiService) {}

    retrieveService(data: TdbiDc) {
        this.path = 'retrieveTdbiDc';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}