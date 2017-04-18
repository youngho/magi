/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {Lotyield} from "./lotyield.model";

@Injectable()
export class lotyieldService {

    constructor(private api: ApiService) {
    }

    private path: string = 'retrieveLotYield';

    postLastTable(data: Lotyield) {
        console.log('saving post:' + data.lotId);
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }

}