import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';

//import { APP_CONFIG, AppConfig } from '../app.config';
/**
 * 1. File name     : api.service.ts
 * 2. Discription   : Restful 서비스를 호출하는 로직 (POST, GET)
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Injectable()
export class ApiService {

    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    // private API_URL: string = 'http://172.16.55.41:8080/';  // 개발 서버 IP 주소
    // private API_URL: string = 'http://localhost:8080/';  // local에서 개발시 접속 주소
    private API_URL: string = 'http://210.125.212.127:8080/';  // for hanmi8

    constructor(private http: Http/*, @Inject(APP_CONFIG) config: AppConfig*/) {
        //this.API_URL = config.apiEndpoint;
    }

    public get(path: string, term?: any): Observable<any> {
        console.log('get resources from url:' + `${this.API_URL}${path}`);
        let search = new URLSearchParams();

        if (term) {
            Object.keys(term).forEach(key => search.set(key, term[key]));
        }

        return this.http.get(`${this.API_URL}${path}`, {search, headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    public retrievePost(path: string, data: any): Observable<any> {
        // 로그인 토큰 정보 사용
        console.log('retrievePost : ' + path);
        let body = JSON.stringify(data);
        console.log('token : ' + localStorage.getItem('token'));
        this.setHeader("x-auth-token", localStorage.getItem('token'));
        return this.http.post(`${this.API_URL}${path}`, body, {headers: this.headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    public post(path: string, data: any): Observable<any> {
        console.log('API포스트' + path);
        let body = JSON.stringify(data);
        console.log('token : ' + localStorage.getItem('token'));
        this.setHeader("x-auth-token", localStorage.getItem('token'));
        return this.http.post(`${this.API_URL}${path}`, body, {headers: this.headers})
        //.map(this.extractData)
            .catch(this.handleError);
    }

    public put(path: string, data: any): Observable<any> {
        let body = JSON.stringify(data);
        return this.http.put(`${this.API_URL}${path}`, body, {headers: this.headers})
        //.map(this.extractData)
            .catch(this.handleError);
    }

    public delete(path: string): Observable<any> {
        return this.http.delete(`${this.API_URL}${path}`, {headers: this.headers})
        //.map(this.extractData)
            .catch(this.handleError);
    }

    public setHeaders(headers) {
        Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
    }

    public setHeader(key: string, value: string) {
        this.headers.set(key, value);
    }

    public deleteHeader(key: string) {
        if (this.headers.has(key)) {
            this.headers.delete(key);
        } else {
            console.log(`header:${key} not found!`);
        }
    }

    private extractData(res: Response): Array<any> | any {
        if (res.status >= 200 && res.status <= 300) {
            return res.json() || {};
        }
        return res;
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        // let errMsg = (error.message) ? error.message :
        //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        // console.error(errMsg); // log to console instead
        if (error.status == 403) {
            alert("ID or password invalid");
        } else if (error.status == 500) {
            alert("Server error. Please contact your administrator. ");
        } else {
            console.log(error);
        }
        return Observable.throw(error);
    }

}

