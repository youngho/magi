/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {User} from "../../90admin/register/user.model";
import {UserUsage} from "../../shared/usage/userUsage.model";

@Injectable()
export class PassChangeService {
    private path: string;

    constructor(private api: ApiService) {
    }

    save(data: User) {
        this.path = 'user/updateRegister';
        return this.api.post(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}