/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {ProgramRegister} from "../ProgramRegister.model";
import {UserUsage} from "../../shared/usage/userUsage.model";

@Injectable()
export class ProgramRegisterService {
    private path: string;

    constructor(private api: ApiService) {
    }

    save(data: ProgramRegister) {
        this.path = 'insertProgramRegister';
        return this.api.post(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}