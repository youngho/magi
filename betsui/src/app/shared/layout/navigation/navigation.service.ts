/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import {ApiService} from "../../../core/api.service";

@Injectable()
export class NavigationService {
    private path: string = '';

    constructor(private api: ApiService) {
    }

    retrievePost(data) {
        return this.api.retrievePost(`${this.path}`, data);
    }
}