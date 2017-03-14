/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {DataSummary} from "./dataSummary.model";

@Injectable()
export class DataSummaryService {

    constructor(private api: ApiService) {}

    private path: string = 'retrieveDataSummary';

    retrieveService(data: DataSummary) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }


}