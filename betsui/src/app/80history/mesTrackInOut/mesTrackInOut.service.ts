/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {MesTrackInOut} from "./mesTrackInOut.model";

@Injectable()
export class MesTrackInOutService {
    private path: string;

    constructor(private api: ApiService) {}

    postLastTable(data: MesTrackInOut) {
        this.path = 'retrieveMesTrackInOut';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}