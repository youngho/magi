/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {ProgramRegister} from "./ProgramRegister.model";

@Injectable()
export class ProgramRegisterService {
    private path: string = 'insertProgramRegister';

    constructor(private api: ApiService) {
    }

    save(data: ProgramRegister) {
        console.log('saving post:' + data.customer);
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }
}