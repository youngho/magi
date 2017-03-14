/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {SlotYield} from "./slotYield.model";

@Injectable()
export class SlotYieldService {

    constructor(private api: ApiService) {
    }

    private path: string = 'retrieveSlotYield';

    retrieveService(data: SlotYield) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

}