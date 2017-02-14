import {Component, Injectable, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import { Headers, Http } from '@angular/http';
import "rxjs/add/operator/map";
import {LastTable} from './LastTable.model';
import {Router} from "@angular/router";
import {LastTableViewService} from "./lastTable-view.service";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'lastTableView',
    templateUrl: 'lastTable-view.template.html',
    providers:[LastTableViewService]
})
@Injectable()
export class lastTableViewComponent implements OnInit, OnDestroy {

    tableForm: FormGroup;
    operator: FormControl;

    @Output() saved = new EventEmitter();

    constructor(private lastTableViewService: LastTableViewService, private router: Router,private fb: FormBuilder) {
        this.operator = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.tableForm = fb.group({
            content: this.operator
        });
    }

/*
    onSubmit(form){
        console.log("onSave()에 넘어온 값 = " + this.lastTable);
        this.lastTableViewService
            .postAuthority(this.lastTable)
            .subscribe(
                data => this.lastTable = data,
                error => alert(error),
                () => console.log("Finish onSave()")
            )
    }
*/

    onSave(){
    }
    ngOnInit(){
    }

    ngOnDestroy(){
    }
    saveLastTableForm() {
        console.log('submitting comment form @'+ this.tableForm.value);
        this.saved
        // .subscribe((res) => {
        //   this.commentForm.setValue({ content: '' });
        //   this.commentForm.markAsPristine();
        // })
            .emit(this.tableForm.value);

        this.tableForm.controls['content'].setValue('');
        this.tableForm.markAsPristine();
    }
}