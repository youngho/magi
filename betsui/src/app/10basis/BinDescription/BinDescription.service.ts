/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {BinDescription} from "./BinDescription.model";

@Injectable()
export class BinDescriptionService {

    private path: string = 'retrieveBinDescription';

    constructor(private api: ApiService) {
    }


    postRetrieveByKey(data: BinDescription) {
        this.path = 'retrieveBinDescriptionByKey';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrieve(data: BinDescription) {
        this.path = 'retrieveBinDescription';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: BinDescription) {
        this.path = 'insertBinDescription';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }
}