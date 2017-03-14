/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {BoardCompositeMap} from "./boardCompositeMap.model";

@Injectable()
export class BoardCompositeMapService {
    private path: string = 'retrieveBoardCompositeMap';

    constructor(private api: ApiService) {
    }

    postLastTable(data: BoardCompositeMap) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }


}