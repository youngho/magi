/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {RawData} from "../rawData.model";
/**
 * BETS-UI-0701
 * Test RAW Data
 * Test 공정에서 발생한 RAW Data를 조회한다
 */
@Injectable()
export class CasiService {
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