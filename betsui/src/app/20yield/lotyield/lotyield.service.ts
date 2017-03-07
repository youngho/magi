/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {Lotyield} from "./lotyield.model";

@Injectable()
export class lotyieldService {
    private path: string = 'retireveLotYield';

    constructor(private api: ApiService) {
    }



    postLastTable(data: Lotyield) {
        console.log('saving post:' + data.lotId);
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    // postLastTable() {
    //     console.log('saving post:' );
    //     console.log('PATH : ' + this.path);
    //     return this.api.get(`${this.path}`);
    // }
}