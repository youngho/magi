/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {TestLotCancel} from "./testLotCancel.model";

@Injectable()
export class TestLotCancelService {
    private path: string = 'retrieveTestLotCancel';

    constructor(private api: ApiService) {}

    postLastTable(data: TestLotCancel) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

}