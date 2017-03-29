/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
// import {RawData} from "../rawData.model";
import {Http} from "@angular/http";

@Injectable()
export class DashboardService {
    private path: string = 'retrieveDashboard';


    constructor(private api: ApiService, private http: Http) {
    }

    data = {"date":"0301"}
    // data2 = {"mon":"0301","rangeStart":"0301","rangeEnd":"0301"}
    /*
     postRetrieveByKey(data) {
     // this.path = 'retrieveRawDataByKey';
     this.path = 'download/external';
     console.log('PATH : ' + this.path);
     return this.api.post(`${this.path}`, data);
     }

     */
    retrievePost() {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, this.data);
    }

    retrievePostDetail(data2) {
        this.path = "retrieveChartDetail"
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data2);
    }
}