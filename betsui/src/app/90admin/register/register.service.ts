/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {User} from "./user.model";


@Injectable()
export class RegisterService {

    private path: string = 'user/retrieveRegister';

    constructor(private api: ApiService) {
    }

    postRetrieve(data: User) {
        console.log('service Component post :');
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: User) {
        this.path = 'insertProgramRegister';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

}