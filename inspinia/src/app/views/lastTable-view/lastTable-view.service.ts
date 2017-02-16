import {Injectable} from '@angular/core';
import {LastTable} from './LastTable.model';
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ApiService} from '../../core/api.service';

@Injectable()
export class LastTableViewService {
    private path: string = 'lastTable';

    constructor(private api: ApiService) {
    }

    /*
     constructor(private http:Http){

     }
     */

    /*
     getAuthority(){
     return this.http.get('/authority')
     .map(res=>res.json());
     }
     */

    postLastTable(data: LastTable) {
        console.log('saving post:' + data.operator);
        console.log('PATH : ' + this.path);
        return this.api.post(`${this.path}`, data);
    }
}