/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {SingleDut} from "./singledut.model";

@Injectable()
export class SingleDutService {
    private path: string = 'retrieveSingleDutMap';

    constructor(private api: ApiService) {}

    postLastTable(data: SingleDut) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

}