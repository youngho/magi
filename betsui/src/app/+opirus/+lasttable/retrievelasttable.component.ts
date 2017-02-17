import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {RetrieveLastTableService} from "./retrievelasttable.service";



@FadeInTop()
@Component({
    selector: 'retrievelasttable',
    templateUrl: './retrievelasttable.component.html',
    providers:[RetrieveLastTableService]
})
export class retrieveLastTableComponent implements OnInit {

    tableForm: FormGroup;
    tester: FormControl;
    mainPgm: FormControl;
    partnumber: FormControl;
    process: FormControl;
    sysDateStart: FormControl;
    sysDateEnd: FormControl;


    constructor(private fb: FormBuilder, private retrieveLastTableService: RetrieveLastTableService) {
        this.tester = new FormControl('', [Validators.required, Validators.minLength(10)]);
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
        });
    }

    ngOnInit() {
    }

    saveLastTableForm() {
        console.log(this.tableForm.value);
        console.log('submitting LastTable form @' + this.tableForm);
        // this.saved
        // .subscribe((res) => {
        //   this.commentForm.setValue({ content: '' });
        //   this.commentForm.markAsPristine();
        // })
        //     .emit(this.tableForm.value);

        this.retrieveLastTableService.postLastTable(this.tableForm.value)
            .subscribe(
                res => console.log(res.body),
                error => alert(error),
                () => console.log("Finished")
            );

        this.tableForm.controls['operator'].setValue('');
        this.tableForm.markAsPristine();
    }
}
