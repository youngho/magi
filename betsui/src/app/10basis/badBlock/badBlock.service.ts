/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {BadBlock} from "./badBlock.model";
import {UserUsage} from "../../shared/usage/userUsage.model";

@Injectable()
export class BadBlockService {
    private path: string;

    constructor(private api: ApiService) {
    }

    postRetrieveByKey(data) {
        this.path = 'retrieveBadBlockByKey';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrieve(data: BadBlock) {
        this.path = 'retrieveBadBlock';
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: BadBlock) {
        this.path = 'insertBadBlock';
        return this.api.post(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}