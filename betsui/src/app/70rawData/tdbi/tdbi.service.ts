/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {RawData} from "../rawData.model";

@Injectable()
export class TdbiService {
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