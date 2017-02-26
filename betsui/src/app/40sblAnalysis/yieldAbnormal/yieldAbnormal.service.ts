/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {YieldAbnormal} from "./yieldAbnormal.model";

@Injectable()
export class YieldAbnormalService {
    private path: string = 'retireveSingleDut';

    constructor(private api: ApiService) {
    }



    postLastTable(data: YieldAbnormal) {
        console.log('saving post:' + data.lotNumber);
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    // postLastTable() {
    //     console.log('saving post:' );
    //     console.log('PATH : ' + this.path);
    //     return this.api.get(`${this.path}`);
    // }
}