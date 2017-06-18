import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {MesTrackInOut} from "./mesTrackInOut.model";

/**
 * 1. File name     : mesTrackInOut.service.ts
 * 2. Discription   : Process 로직에서 MES와 통신한 이력을 보여주는 화면이다.
 * 3. writer        : yhkim     2017.02.17
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0802 : Mes Track In Out
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class MesTrackInOutService {
    private path: string;

    constructor(private api: ApiService) {}

    postLastTable(data: MesTrackInOut) {
        this.path = 'retrieveMesTrackInOut';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}