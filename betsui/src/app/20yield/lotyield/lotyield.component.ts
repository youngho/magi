import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {lotyieldService} from "./lotyield.service";
import {Http, Response} from '@angular/http';

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {lotyield} from './lotyield.model';

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'lotyield',
    templateUrl: './lotyield.component.html',
    providers: [lotyieldService]
})
export class lotyieldComponent implements OnInit {

    public REST_ROOT = 'https://jsonplaceholder.typicode.com';

    componentData = null;
    errorMessage = null;

    data = {
        sysDate: "",
        sysDateStart: "",
        sysDateEnd: "",
        lotNumber: "",
        processName: "",
        partnumberName: "",
        programName: "",
        operatorName: "",
        testerName: "",
        testerNumber: "",
        testerHead: "",
        hdModel: "",
        hdTemp: "",
        boardId: "",
        line: "",
        site: "",
        lotType: "",
        retestCount: "",
        finalRetestCount: "",
        yield: "",
        simaxInqty: "",
        testCount: "",
        passCount: "",
        category01: "",
        category02: "",
        category03: "",
        category04: "",
        category05: "",
        category06: "",
        category07: "",
        category08: "",
        category09: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        executeDate: "",
        opInput: "",
        opCat1: "",
        opCat2: "",
        opCat3: "",
        opCat4: "",
        opCat5: "",
        opCat6: "",
        opCat7: "",
        opCat8: "",
        opCat9: "",
        sortInput: "",
        sort01: "",
        sort02: "",
        sort03: "",
        sort04: "",
        sort05: "",
        sort06: "",
        sort07: "",
        sort08: "",
        hdInput: "",
        hdCat1: "",
        hdCat2: "",
        hdCat3: "",
        hdCat4: "",
        hdCat5: "",
        hdCat6: "",
        hdCat7: "",
        hdCat8: "",
        cat61: "",
        cat62: "",
        cat63: "",
        cat64: "",
        cat65: "",
        cat71: "",
        cat72: "",
        cat73: "",
        cat74: "",
        cat75: "",
        revno: "",
        revnoEnd: "",
        lotin: "",
        lotout: "",
        subCnt1: "",
        subCnt2: "",
        finalSubCnt1: "",
        finalSubCnt2: "",
        ngCnt1: "",
        ngCnt2: "",
        finalNgCnt1: "",
        finalNgCnt2: "",
        subProgramName: "",
        initialBadBlock: "",
        finalBadBlock: "",
        gapIbbfbb: "",
        mLotList: "",
        recycleStep: "",
        recycleFlag: "",
        sblCode: "",
        sblJudge: "",
        mcNcfcode: "",
        ncfcodeSimax: "",
        ncacodeSimax: "",
        ncecodeSimax: "",
        ncqcodeSimax: "",
        nctcodeSimax: "",
        nchcodeSimax: "",
        ncmcodeSimax: "",
        ncpcodeSimax: "",
        ncscodeSimax: "",
        ncbcodeSimax: "",
        nckcodeSimax: "",
        ncrcodeSimax: "",
        dataFormat: "",
        sblCmd: "",
        runSblCode: "",
        runSblCmd: "",
        hOsA: "",
        hOsB: "",
        tOsOpsys: "",
        tOsAtl: "",
        tOsDiag: "",
        tOsSysos: "",
        tOsGpib: "",
        tIf: "",
        fsstFlag: "",
        lotAsysite: "",
        edsBadBlock: "",
        gapEbbfbb: "",
        frLot: "",
        subbin114: "",
        finalSubbin114: "",
        subbin115: "",
        finalSubbin115: "",
        subbin116: "",
        finalSubbin116: "",
        reworkFlag: "",
        testLine: "",
        purposeType: "",


    };

    //public datas: lotyield[];

    /*    tableForm: FormGroup;
     tester: FormControl;
     mainPgm: FormControl;
     partnumber: FormControl;
     process: FormControl;
     sysDateStart: FormControl;
     sysDateEnd: FormControl;*/


    constructor(private fb: FormBuilder, private retrieveLastTableService: lotyieldService, private http: Http) {
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
        //this.data.sysDateStart = '20170101';
        this.data.partnumberName = 'K9CFGY8U5A-CCK0000-HXBPHV';
        this.data.lotNumber = 'HJKD369Q';
        this.data.processName = 'T070000';
        this.data.testCount = '2146';
        this.data.testerName = 'T5375';
        this.data.testerHead = 'A';
    }



    ngOnInit() {

    }
    mymodel : string;
    valuechange(newValue) {
        this.mymodel = newValue;
        console.log(newValue)
    }
    saveLastTableForm() {
        console.log("sysDateStart : " + this.data.sysDateStart);
        console.log("sysDateEnd : " + this.data.sysDateEnd);
        console.log("partnumberName : " + this.data.partnumberName);
        console.log("lotNumber : " + this.data.lotNumber);
        console.log("processName : " + this.data.processName);
        console.log("testCount : " + this.data.testCount);
        console.log("testerName : " + this.data.testerName);
        console.log("testerHead : " + this.data.testerHead);
        // this.saved
        // .subscribe((res) => {
        //   this.commentForm.setValue({ content: '' });
        //   this.commentForm.markAsPristine();
        // })
        //     .emit(this.tableForm.value);
        this.retrieveLastTableService.postLastTable(this.data)
            .subscribe((apps) => {
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                colReorder: false,
                                data: apps,
                                columns: [
                                    {data: 'sysDate'},
                                    {data: 'partnumberName'},
                                    {data: 'lotNumber'},
                                    {data: 'processName'},
                                    {data: 'testCount'},
                                    {data: 'testerName'},
                                    {data: 'testerHead'},
                                    {data: 'category01'},
                                    ],
                                buttons: [
                                    'copy', 'excel', 'pdf', 'print'
                                ]
                            }
                        }
                    };
                },
                error => this.errorMessage = error);

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
