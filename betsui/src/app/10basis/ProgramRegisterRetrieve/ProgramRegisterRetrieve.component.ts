import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ProgramRegisterRetrieveService} from "./ProgramRegisterRetrieve.service";
import {Http, Response} from '@angular/http';

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ProgramRegisterRetrieve} from './ProgramRegisterRetrieve.model';

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'ProgramRegisterRetrieveComponent',
    templateUrl: 'ProgramRegisterRetrieve.component.html',
    providers: [ProgramRegisterRetrieveService]
})
export class ProgramRegisterRetrieveComponent implements OnInit {

    componentData = null;
    errorMessage = null;

    data = {
        productName: "",
        partNumber: "",
        customer: "",
        packageType: "",
        processCode: "",
        testerModel: "",
        mainProgramName: "",
        temperature: "",
        sblYieldLimit: "",
        sblSubbinANumber: "",
        sblSubbinALimitPercent: "",
        sblSubbinALimitCount: "",
        sblSubbinBNumber: "",
        sblSubbinBLimitPercent: "",
        sblSubbinBLimitCount: "",
        functionKey1: "",
        functionKey2: "",
        functionKey3: "",
        functionKey4: "",
        functionKey5: "",
        functionKey6: "",
        functionKey7: "",
        functionKey8: "",
        functionKey9: "",
        functionKey10: "",
        functionKey11: "",
        functionKey12: "",
        functionKey13: "",
        functionKey14: "",
        functionKey15: "",
        functionKey16: "",
        fab: "",
        grade: "",
        programVersion: "",
        firmwareVersion: "",
        testerOsVersion: "",
        parallel: "",
        firmwareName: "",
        operator: "",
        sysDate: "",
        sysDateStart: "",
        sysDateEnd: "",
        boardId: ""
    };

    constructor(private fb: FormBuilder, private service: ProgramRegisterRetrieveService, private http: Http) {
        this.data.testerModel = 'T5585';
        this.data.partNumber = 'K4B2G1646C-HC___CS-E_____';
        this.data.processCode = 'T070512';
        this.data.parallel = '256';
        this.data.mainProgramName = 'bi4a96x1';
        this.data.sblYieldLimit = '95';
    }

    saveLastTableForm() {
        console.log("testerModel : " + this.data.testerModel);
        console.log("partNumber : " + this.data.partNumber);
        console.log("processCode : " + this.data.processCode);
        console.log("parallel : " + this.data.parallel);
        console.log("mainProgramName : " + this.data.mainProgramName);
        console.log("sblYieldLimit : " + this.data.sblYieldLimit);

        this.service.postRetrieve(this.data)
            .subscribe((apps) => {
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                colReorder: false,
                                data: apps,
                                columns: [
                                    {data: 'testerModel'},
                                    {data: 'partNumber'},
                                    {data: 'processCode'},
                                    {data: 'parallel'},
                                    {data: 'mainProgramName'},
                                    {data: 'sblYieldLimit'},
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
