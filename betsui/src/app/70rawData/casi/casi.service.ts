/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {RawData} from "../rawData.model";
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class CasiService {
    private path: string = 'retrieveRawData';


    constructor(private api: ApiService, private http: Http) {}


    postRetrieveByKey(data) {
        // this.path = 'retrieveRawDataByKey';
        this.path = 'download/external';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

    retrievePost(data: RawData) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

}