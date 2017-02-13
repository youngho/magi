/**
 * Created by yhkim on 2017-02-10.
 */

import { Injectable } from '@angular/core';
import {Authority} from './authority';
import {Headers,Http} from "@angular/http";
import "rxjs/add/operator/map";
import { ApiService } from '../../core/api.service';

@Injectable()
export class AuthorityViewService {
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

    postAuthority(data: Authority) {
        console.log('saving post:' + data.authority_nm);
        return this.api.post(`${this.path}`, data);
    }
}