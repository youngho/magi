import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {TestEfficiency} from "./testEfficiency.model";

/**
 * 1. File name     : testEfficiency.service.ts
 * 2. Discription   : Test Efficiency 조회 기능 각 시간을 산출하는 로직이 중요하다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0601 : Test Efficiency
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class TestEfficiencyService {
    private path: string;

    constructor(private api: ApiService) {}

    postRetrieve(data: TestEfficiency) {
        this.path = 'retrieveTestEfficiency';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrieveLot(data: TestEfficiency) {
        this.path = 'retrieveUsingLot';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postRetrievePie(data: TestEfficiency) {
        this.path = 'retrievePieData';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}
