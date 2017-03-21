/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "./userUsage.model";

@Injectable()
export class UserUsageService {
    private path: string = 'retrieveComUserUsage';

    constructor(private api: ApiService) {}

    postLastTable(data: UserUsage) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }
}