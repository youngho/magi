/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {YieldAbnormal} from "./yieldAbnormal.model";

@Injectable()
export class YieldAbnormalService {
    private path: string = 'retrieveYieldAbnormal';

    constructor(private api: ApiService) {
    }

    postLastTable(data: YieldAbnormal) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }


}