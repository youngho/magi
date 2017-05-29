/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {TdbiDc} from "./tdbiDc.model";

@Injectable()
export class TdbiDcService {
    private path: string;

    constructor(private api: ApiService) {}

    retrieveService(data: TdbiDc) {
        this.path = 'retrieveTdbiDc';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}