/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {MesTrackInOut} from "./mesTrackInOut.model";

@Injectable()
export class MesTrackInOutService {
    private path: string = 'retrieveMesTrackInOut';

    constructor(private api: ApiService) {}

    postLastTable(data: MesTrackInOut) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }
}