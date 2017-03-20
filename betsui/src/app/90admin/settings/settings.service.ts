/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {Setting} from "./settings.model";

@Injectable()
export class SettingsService {

    private path: string;

    constructor(private api: ApiService) {
    }

    postRetrieveByKey(data) {
        this.path = 'retrieveTdbiBoardTypeByKey';
        console.log('service Component post :');
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrieve(data: Setting) {
        this.path = 'retrieveSettings';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: Setting) {
        this.path = 'insertTdbiBoardType';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

}