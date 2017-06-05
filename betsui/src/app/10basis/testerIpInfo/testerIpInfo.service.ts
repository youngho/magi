/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {TesterIpInfo} from "./testerIpInfo.model";
import {tick} from "@angular/core/testing";

@Injectable()
export class TesterIpInfoService {

    private path: string = 'retrieveTdbiBoardType';

    constructor(private api: ApiService) {
    }

    postRetrieveByKey(data) {
        this.path = 'retrieveTesterIpByKey';
        console.log('service Component post :');
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrieve(data: TesterIpInfo) {
        this.path = 'retrieveTesterIp';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: TesterIpInfo) {
        this.path = 'insertTesterIp';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}