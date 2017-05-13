import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {TestTime} from "./testTime.model";

@Injectable()
export class TestTimeService {
    private path: string;

    constructor(private api: ApiService) {}

    postRetrieve(data: TestTime) {
        this.path = 'retrieveTestTime';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}