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

    constructor(private service: NgBinService) {
    }

    componentData = null;
    errorMessage = null;
    private data: NgBin = new NgBin();
    private colInfo = new Array();

    onSelectDateFrom(strDate: string) {
        this.data.endTimeStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.data.endTimeEnd = strDate;
    }

    saveLastTableForm() {
        console.log("endTimeStart : " + this.data.endTimeStart);
        console.log("endTimeEnd : " + this.data.endTimeEnd);
        console.log("partNumber : " + this.data.partNumber);
        console.log("processCode : " + this.data.processCode);
        console.log("testerModel : " + this.data.testerModel);
        console.log("testerNumber : " + this.data.testerNumber);
        console.log("head : " + this.data.head);
        console.log("testCounter : " + this.data.testCounter);

        this.service.postLastTable(this.data)
            .subscribe((apps) => {

                    console.log(apps);
                    // debugger;
                    this.colInfo = [];
                    var tempStr;
                    var apps_obj = apps[0];
                    for (var key in apps_obj) {
                        var value = key;
                        //console.log("===>" + value)
                        tempStr = {"title": key, "data": key};
                        this.colInfo.push(tempStr)
                    }
                    ;

                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {

                            options: {
                                dom: 'Bfrtip',
                                fixedColumns: true,
                                colReorder: true,
                                scrollX: true,
                                data: apps,
                                columns: this.colInfo,
                                buttons: [
                                    'colvis', 'copy', 'excel', 'pdf', 'print'
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
