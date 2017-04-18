/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {LcVersionRegister} from "./lcVersionRegister.model";
import {UserUsage} from "../../shared/usage/userUsage.model";

@Injectable()
export class LcVersionRegisterService {
    private path: string;

    constructor(private api: ApiService) {
    }

    save(data: LcVersionRegister) {
        this.path = 'insertLcVersionRegister';
        return this.api.post(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}