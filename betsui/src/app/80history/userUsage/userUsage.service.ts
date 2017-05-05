/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";

@Injectable()
export class UserUsageService {
    private path: string;

    constructor(private api: ApiService) {}

    postRetrieve(data) {
        this.path = 'retrieveComUserUsage';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}