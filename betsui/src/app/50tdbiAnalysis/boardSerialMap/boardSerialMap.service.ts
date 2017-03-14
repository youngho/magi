/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {BoardSerialMap} from "./boardSerialMap.model";

@Injectable()
export class BoardSerialMapService {
    constructor(private api: ApiService) {}

    private path: string = 'retrieveBoardSerialMap';

    retrieveService(data: BoardSerialMap) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }
}