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

    postRetrieve(data: Setting) {
        this.path = 'retrieveSettings';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrieveByKey(data) {
        this.path = 'retrieveSettingsByKey';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: Setting) {
        this.path = 'updateSettings';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

}