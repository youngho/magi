import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {DataSummary} from "./dataSummary.model";
/**
 * 1. File name     : dataSummary.component.ts
 * 2. Discription   : TDBI Data Summary
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0501 : Data Summary
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
@Injectable()
export class DataSummaryService {
    private path: string;

    constructor(private api: ApiService) {}

    retrieveService(data: DataSummary) {
        this.path = 'retrieveDataSummary';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}