import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {RetrieveLastTableService} from "./retrievelasttable.service";
import {Http, Response} from '@angular/http';

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {retrieveLastTableCond} from './retrievelasttableCond.model';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'retrievelasttable',
    templateUrl: './retrievelasttable.component.html',
    providers: [RetrieveLastTableService]
})
export class retrieveLastTableComponent implements OnInit {

    public REST_ROOT = 'https://jsonplaceholder.typicode.com';


    data = {
        userId: "",
    id : "",
    title: "",
    body: "",
    };

    public datas: retrieveLastTableCond[];

    /*    tableForm: FormGroup;
     tester: FormControl;
     mainPgm: FormControl;
     partnumber: FormControl;
     process: FormControl;
     sysDateStart: FormControl;
     sysDateEnd: FormControl;*/


    constructor(private fb: FormBuilder, private retrieveLastTableService: RetrieveLastTableService, private http: Http) {
        /*        this.tester = new FormControl('', [Validators.required, Validators.minLength(10)]);
         this.mainPgm = new FormControl('', [Validators.required, Validators.minLength(10)]);
         this.partnumber = new FormControl('', [Validators.required, Validators.minLength(10)]);
         this.process = new FormControl('', [Validators.required, Validators.minLength(10)]);
         this.sysDateStart = new FormControl('', [Validators.required, Validators.minLength(10)]);
         this.sysDateEnd = new FormControl('', [Validators.required, Validators.minLength(10)]);

         this.tableForm = fb.group({
         tester: this.tester,
         mainPgm: this.mainPgm,
         partnumber: this.partnumber,
         process: this.process,
         sysDateStart: this.sysDateStart,
         sysDateEnd: this.sysDateEnd,
         });*/
    }

    options = {
        dom: "Bfrtip",
        ajax: this.datas,
        columns: [
            { data: "userId" },
            { data: "id" },
            { data: "title" },
            { data: "body" },
        ]
    };

    ngOnInit() {
    }

    saveLastTableForm() {
        console.log(this.data.title);
        console.log('submitting LastTable form @' + this.data);
        // this.saved
        // .subscribe((res) => {
        //   this.commentForm.setValue({ content: '' });
        //   this.commentForm.markAsPristine();
        // })
        //     .emit(this.tableForm.value);


/*
        this.retrieveLastTableService.postLastTable(this.data)
            .subscribe(
                res => console.log(res.json()),
                //res => this.datas = res.json(),

                error => alert(error),
                () => console.log("Finished")
            );
*/


        //this.tableForm.controls['operator'].setValue('');
        //this.tableForm.markAsPristine();
    }

    private extractData(res: Response) {
        let body = res.json();
        if (body) {
            return body.data || body
        } else {
            return {}
        }
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
