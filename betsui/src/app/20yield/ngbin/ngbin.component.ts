import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {NgBinService} from "./ngbin.service";

import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';
import {DynamicComponent} from './dynamic-component';
import {DatatableComponent} from './datatable.component';
import {NgBin} from './ngbin.model';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'NgBin',
    templateUrl: 'ngbin.component.html',
    providers: [NgBinService, NgBin]
})
export class NgBinComponent implements OnInit {

    componentData = null;
    errorMessage = null;
    private data: NgBin = new NgBin();


    private colInfo = new Array();
// = [{title: '파트', data: 'partNumber'},
//     {title: this.imsi5, data: 'operatorId'},
//     {data: 'lotId'},
//     {data: 'lotInTime'},
//     {data: 'endTime'},
//     {data: 'processCode'},
//     {data: 'testerModel'},
//     {data: 'testerNumber'},
//     {data: 'head'},
//     {data: 'testCounter'},
//     {data: 'handlerModel'},
//     {data: 'boardId'},];


    constructor(private service: NgBinService) {
        this.data.partnumberName = 'K9CFGY8U5A-CCK0000-HXBPHV';
    }

    onSelectDateFrom(strDate: string) {
        this.data.sysDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.data.sysDateStart = strDate;
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

                    console.log(apps);
                    //debugger;
                    var tempStr;
                    var apps_obj = apps[0];
                    for (var key in apps_obj) {
                        var value = key;
                        console.log("===>" + value)
                        tempStr = {"title": key, "data": key};
                        this.colInfo.push(tempStr)
                    }


                    // for (let entry of apps) {
                    //     console.log(entry); // 1, "string", false
                    // }

                    ;
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                dom: 'Bfrtip',
                                colReorder: true,
                                scrollX: true,
                                data: apps,
                                columns: this.colInfo,
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
