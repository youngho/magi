/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {TestEfficiency} from "./testEfficiency.model";

@Injectable()
export class TestEfficiencyService {
    private path: string = 'retrieveTestEfficiency';

    constructor(private api: ApiService) {}

    postLastTable(data: TestEfficiency) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }
}