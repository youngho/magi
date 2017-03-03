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
        this.path = 'user/retrieveRegister';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: User) {
        this.path = 'user/insertRegister';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

}