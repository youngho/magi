/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {TestTime} from "./testTime.model";

@Injectable()
export class TestTimeService {
    private path: string = 'retrieveTestTime';

    constructor(private api: ApiService) {}

    postLastTable(data: TestTime) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }
}