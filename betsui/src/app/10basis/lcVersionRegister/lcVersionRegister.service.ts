/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {LcVersionRegister} from "./lcVersionRegister.model";

@Injectable()
export class LcVersionRegisterService {
    private path: string = 'insertLcVersionRegister';

    constructor(private api: ApiService) {
    }

    save(data: LcVersionRegister) {
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }
}