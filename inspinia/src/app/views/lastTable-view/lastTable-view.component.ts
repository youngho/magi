import {Component, Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import "rxjs/add/operator/map"

@Component({
    selector: 'lastTableView',
    templateUrl: 'lastTable-view.template.html'
})
@Injectable()
export class lastTableViewComponent {
    private API_URI: string = "http://localhost:8080/tests";

    public speakers : any[];

    onSubmit(form){
        console.log(form.value);
        let headers = new Headers({'Content-Type':'json'});
    }
    constructor(private _http:Http){
        _http.get(this.API_URI,).subscribe(result => {
            this.speakers = result.json()})
    }
/*
    constructor(private _http:Http){
        _http.get(this.API_URI,).subscribe(result => {
            this.speakers = result.json()})
    }
*/
}