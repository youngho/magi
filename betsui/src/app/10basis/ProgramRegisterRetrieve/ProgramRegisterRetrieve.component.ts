import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ProgramRegisterRetrieveService} from "./ProgramRegisterRetrieve.service";
import {Http, Response} from '@angular/http';

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {lotyield} from './ProgramRegisterRetrieve.model';

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'lotyield',
    templateUrl: 'ProgramRegisterRetrieve.component.html',
    providers: [ProgramRegisterRetrieveService]
})
export class ProgramRegisterRetrieveComponent implements OnInit {

    componentData = null;
    errorMessage = null;

    data = {
        product:"",
        partNumber:"",
        customer:"",
        packageType:"",
        processCode:"",
        testerModel:"",
        mainProgramName:"",
        temperature:"",
        sblYieldLimit:"",
        sblSubbinANumber:"",
        sblSubbinALimitPercent:"",
        sblSubbinALimitCount:"",
        sblSubbinBNumber:"",
        sblSubbinBLimitPercent:"",
        sblSubbinBLimitCount:"",
        functionKey1:"",
        functionKey2:"",
        functionKey3:"",
        functionKey4:"",
        functionKey5:"",
        functionKey6:"",
        functionKey7:"",
        functionKey8:"",
        functionKey9:"",
        functionKey10:"",
        functionKey11:"",
        functionKey12:"",
        functionKey13:"",
        functionKey14:"",
        functionKey15:"",
        functionKey16:"",
        fab:"",
        grade:"",
        programVersion:"",
        firmwareVersion:"",
        testerOsVersion:"",
        parallel:"",
        firmwareName:"",
        operator:"",
        sysDate:"",
        sysDateStart:"",
        sysDateEnd:"",
        boardId:""
    };

    constructor(private fb: FormBuilder, private service : ProgramRegisterRetrieveService, private http: Http) {
        this.data.product = 'K9CFGY8U5A-CCK0000-HXBPHV';
        this.data.partNumber = 'HJKD369Q';
        this.data.customer = 'T070000';
        this.data.packageType = '2146';
        this.data.processCode = 'T5375';
        this.data.testerModel = 'A';
    }

    saveLastTableForm() {
        console.log("product : " + this.data.sysDateStart);
        console.log("sysDateEnd : " + this.data.sysDateEnd);
        console.log("partnumberName : " + this.data.product);
        console.log("lotNumber : " + this.data.partNumber);
        console.log("processName : " + this.data.customer);
        console.log("testCount : " + this.data.packageType);
        console.log("testerName : " + this.data.processCode);
        console.log("testerHead : " + this.data.testerModel);

        this.service.postRetrieve(this.data)
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
                                    {data: 'boardId'},

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
    }

    ngOnInit() {
    }
}
