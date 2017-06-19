import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {BoardCompositeMap} from "./boardCompositeMap.model";

/**
 * 1. File name     : boardCompositeMap.service.ts
 * 2. Discription   : Board Composite Map
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0503 : Board Composite Map
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@Injectable()
export class BoardCompositeMapService {
    private path: string;

    constructor(private api: ApiService) {
    }

    postLastTable(data: BoardCompositeMap) {
        this.path = 'retrieveBoardCompositeMap';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}