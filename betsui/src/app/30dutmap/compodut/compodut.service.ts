/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {CompoDut} from "./compodut.model";

@Injectable()
export class CompoDutService {
    private path: string = 'retrieveCompoDutMap';

    constructor(private api: ApiService) {}

    postLastTable(data: CompoDut) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

}