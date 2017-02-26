import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';
import {DataSummary} from './dataSummary.model';
import {DataSummaryService} from "./dataSummary.service";

declare var $: any;

@FadeInTop()
@Component({
    selector: 'SingledDutBin',
    templateUrl: 'dataSummary.component.html',
    providers: [DataSummaryService,DataSummary]
})
export class DataSummaryComponent implements OnInit {

    componentData = null;
    errorMessage = null;
    private data : DataSummary = new DataSummary();

    constructor(private service: DataSummaryService) {
        // this.data.partnumberName = 'K9CFGY8U5A-CCK0000-HXBPHV';
        // this.data.lotNumber = 'HJKD369Q';
        // this.data.processName = 'T070000';
        // this.data.testCount = '2146';
        // this.data.testerName = 'T5375';
        // this.data.testerHead = 'A';
    }

    saveLastTableForm() {
        console.log("sysDateStart : " + this.data.sysDateStart);
        console.log("sysDateEnd : " + this.data.sysDateEnd);


        this.service.postLastTable(this.data)
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
                                    {data: 'category02'},
                                    {data: 'category03'},
                                    {data: 'category04'},
                                    {data: 'category05'},
                                    {data: 'category06'},
                                    {data: 'category07'},
                                    {data: 'category08'},
                                    {data: 'category09'},
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
