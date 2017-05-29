/**
 * BETS-UI-0805 : Chip ID Duplicate
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