import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {LcRevision} from "./lcRevision.model";
/**
 * 1. File name     : lcRevision.model.ts
 * 2. Discription   : LC 이력을 조회하는 화면이다. 사실상 LC관련 입력 업무가 없기 때문에 사용하지 않는 화면이다.
 * 3. writer        : yhkim     2017.02.17
 * 4. modifier      :
 */
@Injectable()
export class LcRevisionService {
    private path: string;

    constructor(private api: ApiService) {}

    postLastTable(data: LcRevision) {
        this.path = 'retrieveLcRevision';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}
