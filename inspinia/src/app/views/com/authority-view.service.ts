/**
 * Created by yhkim on 2017-02-10.
 */

import { Injectable } from '@angular/core';
import {Authority} from './authority';
import {Headers,Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthorityViewService {
    constructor(private http:Http){

    }

    getAuthority(){
        return this.http.get('/authority')
            .map(res=>res.json());
    }

    postAuthority(authority:Authority){
        console.log("postAuthority() 서비스에 넘어온 값 : "+ authority.user_nm + authority.authority_nm );
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/authority',
            JSON.stringify(authority),
            {headers: headers})
            .map(res=>res.json());
    }
}