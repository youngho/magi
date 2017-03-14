/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {BoardYield} from "./boardYield.model";

@Injectable()
export class BoardYieldService {
    constructor(private api: ApiService) {
    }

    private path: string = 'retrieveBoardYield';

    retrieveService(data: BoardYield) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

}