import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {BinDescription} from "./BinDescription.model";
import {UserUsage} from "../../shared/usage/userUsage.model";
/**
 * 1. File name     : BinDescription.service.ts
 * 2. Discription   : BIN 에 대한 설명을 관리한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class BinDescriptionService {

    private path: string = 'retrieveBinDescription';

    constructor(private api: ApiService) {
    }


    postRetrieveByKey(data: BinDescription) {
        this.path = 'retrieveBinDescriptionByKey';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrieve(data: BinDescription) {
        this.path = 'retrieveBinDescription';
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }

    save(data: BinDescription) {
        this.path = 'insertBinDescription';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }
}