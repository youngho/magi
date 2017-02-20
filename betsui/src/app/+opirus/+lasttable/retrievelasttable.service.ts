/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import {retrieveLastTableCond} from "./retrievelasttableCond.model";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";

@Injectable()
export class RetrieveLastTableService {
    private path: string = '/retrieveLastTable';

    constructor(private api: ApiService) {
    }



    postLastTable(data: retrieveLastTableCond) {
        console.log('saving post:' + data.partnumber);
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

    // postLastTable() {
    //     console.log('saving post:' );
    //     console.log('PATH : ' + this.path);
    //     return this.api.get(`${this.path}`);
    // }
}