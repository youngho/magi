/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {NgBin} from "./ngbin.model";
import {UserUsage} from "../../shared/usage/userUsage.model";

@Injectable()
export class NgBinService {
    private path: string;

    constructor(private api: ApiService) {}

    postLastTable(data: NgBin) {
        this.path = 'retrieveNgBinJson';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}