/**
 * 1. File name     : chipId.service.ts
 * 2. Discription   : CID 중복 목록을 조회한다
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0804 : CID Duplicate Retrieve
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
import {Injectable} from "@angular/core";
import {ApiService} from "../../core/api.service";
import {UserUsage} from "../../shared/usage/userUsage.model";
import {ChipId} from "./chipId.model";

@Injectable()
export class ChipIdService {
    private path: string;

    constructor(private api: ApiService) {}

    postLastTable(data: ChipId) {
        this.path = 'retrieveChipId';
        return this.api.retrievePost(`${this.path}`, data);
    }

    postUsage(data: UserUsage) {
        this.path = 'insertComUserUsage';
        return this.api.post(`${this.path}`, data);
    }
}