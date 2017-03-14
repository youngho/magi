/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {SlotYield} from "./slotYield.model";

@Injectable()
export class SlotYieldService {
    private path: string = 'retrieveSlotYield';

    constructor(private api: ApiService) {}

    postLastTable(data: SlotYield) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

}