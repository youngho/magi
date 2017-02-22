/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {lotyield} from "./ProgramRegisterRetrieve.model";

@Injectable()
export class ProgramRegisterRetrieveService {

    private path: string = 'retrieveProgramRegister';

    constructor(private api: ApiService) {
    }



    postRetrieve(data: lotyield) {
        console.log('service Component post :');
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    // postLastTable() {
    //     console.log('saving post:' );
    //     console.log('PATH : ' + this.path);
    //     return this.api.get(`${this.path}`);
    // }
}