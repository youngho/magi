import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {RawData} from "../rawData.model";
/**
 * 1. File name     : chip.service.ts
 * 2. Discription   : CID 판별을 위해 만들어지는 파일들에 대한 조회 기능
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0703 : Chip RAW Data
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class ChipService {
    private path: string;

    constructor(private api: ApiService) {
    }

    postRetrieveByKey(data) {
        this.path = 'retrieveRawDataByKey';
        // this.path = 'download/external';
        return this.api.post(`${this.path}`, data);
    }

    retrievePost(data: RawData) {
        this.path = 'retrieveRawData';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}