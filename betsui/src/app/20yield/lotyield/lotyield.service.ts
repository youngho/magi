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

    private path: string;

    postLastTable(data: Lotyield) {
        this.path = 'retrieveLotYield';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }

}