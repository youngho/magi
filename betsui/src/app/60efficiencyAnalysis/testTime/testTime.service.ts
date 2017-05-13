import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {TestTime} from "./testTime.model";

/**
 * BETS-UI-0602
 * Test Time
 * mainProgramName 의 변경이력에 대한 CASI_BIN 의 testTime을 보여준다.
 * testTime = shotEndTime - shotStartTime으로 같은 프로그램으로 되어 있는 목록에서 Average, MinTime, MaxTime 의 testTime을 구해서 보여준다.
 */
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