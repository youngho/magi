import { Injectable } from '@angular/core';
import {LastTable} from './LastTable.model';
import {Headers,Http} from "@angular/http";
import "rxjs/add/operator/map";
import { ApiService } from '../../core/api.service';

@Injectable()
export class LastTableViewService {
    private path: string = 'authority';
    constructor(private api: ApiService) { }
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

    postAuthority(data: LastTable) {
        console.log('saving post:' + data);
        return this.api.post(`${this.path}`, data);
    }
}