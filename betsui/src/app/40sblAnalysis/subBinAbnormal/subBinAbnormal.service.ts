/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {SubBinAbnormal} from "./subBinAbnormal.model";

@Injectable()
export class SubBinAbnormalService {
    private path: string = 'retireveSubBinAbnormal';

    constructor(private api: ApiService) {
    }

    postLastTable(data: SubBinAbnormal) {
        console.log('saving post:' + data.lotNumber);
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }


}