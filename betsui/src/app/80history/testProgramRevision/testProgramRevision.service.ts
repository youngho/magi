/**
 * Created by yhkim on 2017-02-17.
 */
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {ApiService} from "../../core/api.service";
import {ProgramRevision} from "./testProgramRevision.model";

@Injectable()
export class ProgramRevisionService {
    private path: string = 'retrieveProgramRevision';

    constructor(private api: ApiService) {}

    postLastTable(data: ProgramRevision) {
        console.log('PATH : ' + this.path);
        return this.api.retrievePost(`${this.path}`, data);
    }
}