/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {User} from "./user.model";

@Injectable()
export class LoginService {

    private path: string = 'user/login';

    constructor(private api: ApiService) {
    }

    postRetrieve(data: User) {
        console.log('service Component post :');
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: User) {
        this.path = 'insertProgramRegister';
        console.log('saving post:' + data.username);
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

}