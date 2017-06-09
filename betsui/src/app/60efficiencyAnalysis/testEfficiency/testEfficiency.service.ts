import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {TestEfficiency} from "./testEfficiency.model";

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
