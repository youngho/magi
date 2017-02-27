/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {TdbiBoardType} from "./TdbiBoardType.model";
import {tick} from "@angular/core/testing";

@Injectable()
export class TdbiBoardTypeRegisterService {

    private path: string = 'retrieveTdbiBoardTypeRegister';

    constructor(private api: ApiService) {
    }

    postRetrieve(data: TdbiBoardType) {
        console.log('service Component post :');
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: TdbiBoardType) {
        this.path = 'insertTdbiBoardTypeRegister';
        console.log('saving post:' + data.boardTypeNo );
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

}