import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {LastTableViewService} from "./lasttable.service";


@FadeInTop()
@Component({
    selector: 'lasttable',
    templateUrl: './lasttable.component.html',
    providers:[LastTableViewService]
})
export class LastTableComponent implements OnInit {

    tableForm: FormGroup;
    operator: FormControl;
    sysDate: FormControl;
    pgm1: FormControl;
    pgm2: FormControl;
    pgm3: FormControl;
    pgm4: FormControl;
    pgm5: FormControl;
    pgm6: FormControl;
    pgm7: FormControl;
    pgm8: FormControl;
    pgm9: FormControl;
    pgm10: FormControl;
    pgm11: FormControl;
    pgm12: FormControl;
    pgm13: FormControl;
    pgm14: FormControl;
    pgm15: FormControl;
    pgm16: FormControl;
    pgm17: FormControl;
    pgm18: FormControl;
    pgm19: FormControl;


    constructor(private fb: FormBuilder, private lastTableViewService: LastTableViewService) {
        this.operator = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm1 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm2 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm3 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm4 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm5 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm6 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm7 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm8 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm9 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm10 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm11 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm12 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm13 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm14 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm15 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm16 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm17 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm18 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.pgm19 = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.tableForm = fb.group({
            operator: this.operator,
            sysDate: this.sysDate,
            pgm1: this.pgm1,
            pgm2: this.pgm2,
            pgm3: this.pgm3,
            pgm4: this.pgm4,
            pgm5: this.pgm5,
            pgm6: this.pgm6,
            pgm7: this.pgm7,
            pgm8: this.pgm8,
            pgm9: this.pgm9,
            pgm10:this.pgm10,
            pgm11:this.pgm11,
            pgm12:this.pgm12,
            pgm13:this.pgm13,
            pgm14:this.pgm14,
            pgm15:this.pgm15,
            pgm16:this.pgm16,
            pgm17:this.pgm17,
            pgm18:this.pgm18,
            pgm19:this.pgm19,
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

        this.lastTableViewService.postLastTable(this.tableForm.value)
            .subscribe(
                res => console.log(res),
                error => alert(error),
                () => console.log("Finished")
            );

        this.tableForm.controls['operator'].setValue('');
        this.tableForm.markAsPristine();
    }
}
