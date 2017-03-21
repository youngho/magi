/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import {ApiService} from "../../../core/api.service";

@Injectable()
export class NavigationService {
    private path: string = 'retrieveNavigation';

    constructor(private api: ApiService) {
    }

    retrievePost(data) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }
}