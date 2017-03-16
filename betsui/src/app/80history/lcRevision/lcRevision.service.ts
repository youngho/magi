/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {LcRevision} from "./lcRevision.model";

@Injectable()
export class LcRevisionService {
    private path: string = 'retrieveLcRevision';

    constructor(private api: ApiService) {}

    postLastTable(data: LcRevision) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }
}