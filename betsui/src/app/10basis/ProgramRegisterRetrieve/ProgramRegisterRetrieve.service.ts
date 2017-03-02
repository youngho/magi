/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {ProgramRegister} from "./ProgramRegister.model";
import {tick} from "@angular/core/testing";

@Injectable()
export class ProgramRegisterRetrieveService {

    private path: string = 'retrieveProgramRegister';

    constructor(private api: ApiService) {
    }

    postRetrieve(data: ProgramRegister) {
        console.log('service Component post :');
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: ProgramRegister) {
        this.path = 'insertProgramRegister';
        console.log('saving post:' + data.customer);
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

}