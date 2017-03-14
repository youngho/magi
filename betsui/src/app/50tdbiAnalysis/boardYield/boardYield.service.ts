/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {BoardYield} from "./boardYield.model";

@Injectable()
export class BoardYieldService {
    private path: string = 'retrieveBoardYield';

    constructor(private api: ApiService) {}

    postLastTable(data: BoardYield) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

}