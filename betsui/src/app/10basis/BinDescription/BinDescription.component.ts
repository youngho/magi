import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {BinDescriptionService} from "./BinDescription.service";
import {Http, Response} from '@angular/http';

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {BinDescription} from './BinDescription.model';

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'BinDescriptionComponent',
    templateUrl: 'BinDescription.component.html',
    providers: [BinDescriptionService]
})
export class BinDescriptionComponent implements OnInit {

    componentData = null;
    errorMessage = null;

    data = {
        partNumber:"",
        mainProgramName:"",
        processCode:"",
        testerModel:"",
        itemName:"",
        mainBin:"",
        subBin:"",
        ngBin:"",
    };

    constructor(private fb: FormBuilder, private service: BinDescriptionService, private http: Http) {
        // this.data.partNumber = 'T5585';
        // this.data.mainProgramName = 'K4B2G1646C-HC___CS-E_____';
        // this.data.processCode = 'T070512';
        // this.data.testerModel = '256';
    }

    saveLastTableForm() {
        console.log("partNumber : " + this.data.partNumber);
        console.log("mainProgramName : " + this.data.mainProgramName);
        console.log("processCode : " + this.data.processCode);
        console.log("testerModel : " + this.data.testerModel);


        this.service.postRetrieve(this.data)
            .subscribe((apps) => {
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                colReorder: false,
                                data: apps,
                                columns: [
                                    {data: 'itemName'},
                                    {data: 'mainBin'},
                                    {data: 'subBin'},
                                    {data: 'ngBin'},
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
