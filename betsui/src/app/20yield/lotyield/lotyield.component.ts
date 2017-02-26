import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import DynamicComponent from './dynamic-component';
import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';

import {DatatableComponent} from './datatable.component';
import {Lotyield} from './lotyield.model';
import {lotyieldService} from "./lotyield.service";

declare var $: any;

@FadeInTop()
@Component({
    selector: 'lotyield',
    templateUrl: './lotyield.component.html',
    providers: [lotyieldService,Lotyield]
})

export class lotyieldComponent implements OnInit {
    componentData = null;
    errorMessage = null;
    // private data : Lotyield = new Lotyield();
    private data : Lotyield = new Lotyield();

    onSelectDateFrom(strDate: string) {
        this.data.sysDateStart = strDate;
    }
    onSelectDateTo(strDate: string) {
        this.data.sysDateEnd = strDate;
    }

    constructor(private retrieveLastTableService: lotyieldService) {
        //this.data.partnumberName = 'K9CFGY8U5A-CCK0000-HXBPHV';
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
                                select :{style:'single'},
                                //"scrollX": true,
                                //colReorder: false,
                                //dom: 'Bfrtip',
                                colReorder: true,
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
                                    {data: 'testQty'},
                                    {data: 'passQty'},
                                    {data: 'lotYield'},
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
