import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'lastTableView',
    templateUrl: 'lastTable-view.template.html'
})
export class lastTableViewComponent {
    private API_URI: string = "http://localhost:8080/tests";

    public speakers : any[];

    onSubmit(form){
        console.log(form.value);
    }
    constructor(private _http:Http){
        _http.get(this.API_URI,).subscribe(result => {
            this.speakers = result.json()})
    }
}