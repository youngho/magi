import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {Setting} from "./settings.model";

/**
 * 1. File name     : settings.service.ts
 * 2. Discription   : 사용자 설정화면
 * 3. writer        : yhkim     2017.06.18
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0902 : Setting
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class SettingsService {

    private path: string;

    constructor(private api: ApiService) {
    }

    postRetrieve(data: Setting) {
        this.path = 'retrieveSettings';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrieveByKey(data: Setting) {
        this.path = 'retrieveSettingsByKey';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: Setting) {
        this.path = 'updateSettings';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}