/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import {LastTable} from "./lasttable.model";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";

@Injectable()
export class LastTableViewService {
    private path: string = 'lastTable';

    constructor(private api: ApiService) {
    }


    postLastTable(data: LastTable) {
        console.log('saving post:' + data.operator);
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }
}