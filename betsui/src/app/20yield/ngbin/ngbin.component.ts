import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {NgBinService} from "./ngbin.service";

import {NgBin} from './ngbin.model';

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'NgBin',
    templateUrl: 'ngbin.component.html',
    providers: [NgBinService,NgBin]
})
export class NgBinComponent implements OnInit {

    componentData = null;
    errorMessage = null;
    private data : NgBin = new NgBin();


    constructor(private service: NgBinService) {
        this.data.partnumberName = 'K9CFGY8U5A-CCK0000-HXBPHV';
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
