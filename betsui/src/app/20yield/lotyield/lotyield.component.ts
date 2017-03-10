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
        this.data.endTimeStart = strDate;
    }
    onSelectDateTo(strDate: string) {
        this.data.endTimeEnd = strDate;
    }

    constructor(private retrieveLastTableService: lotyieldService) {
        //this.data.partnumberName = 'K9CFGY8U5A-CCK0000-HXBPHV';
    }

    resetForm(){
        this.data.endTimeStart = null;
        this.data.endTimeEnd = null;
        this.data.partNumber = null;
        this.data.processCode = null;
        this.data.testerModel = null;
        this.data.testerNumber = null;
        this.data.head = null;
        this.data.testCounter = null;
        this.data.lotId = null;
        this.data.mainProgramName = null;
        this.data.boardId = null;
    }

    saveLastTableForm() {
        console.log("endTimeStart : " + this.data.endTimeStart);
        console.log("endTimeEnd : " + this.data.endTimeEnd);
        console.log("partNumber : " + this.data.partNumber);
        console.log("lotId : " + this.data.lotId);
        console.log("processCode : " + this.data.processCode);
        console.log("testCounter : " + this.data.testCounter);
        console.log("testerModel : " + this.data.testerModel);
        console.log("head : " + this.data.head);
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
                                scrollX: true,
                                dom: 'Bfrtip',
                                colReorder: true,
                                data: apps,
                                columns: [
                                    {data: 'partNumber'},
                                    {data: 'operatorId'},
                                    {data: 'lotId'},
                                    {data: 'lotInTime'},
                                    {data: 'endTime'},
                                    {data: 'processCode'},
                                    {data: 'testerModel'},
                                    {data: 'testerNumber'},
                                    {data: 'head'},
                                    {data: 'testCounter'},
                                    {data: 'handlerModel'},
                                    {data: 'boardId'},
                                    {data: 'mainProgramName'},
                                    {data: 'sblResult'},
                                    {data: 'sblYieldResult'},
                                    {data: 'sblBin1Result'},
                                    {data: 'sblBin2Result'},
                                    {data: 'sblBin3Result'},
                                    {data: 'sblBin4Result'},
                                    {data: 'sblBin5Result'},
                                    {data: 'sblBin6Result'},
                                    {data: 'sblBin7Result'},
                                    {data: 'sblBin8Result'},
                                    {data: 'sblBin9Result'},
                                    {data: 'quantity'},
                                    {data: 'input'},
                                    {data: 'pass'},
                                    {data: 'yield'},
                                    {data: 'bin1'},
                                    {data: 'bin2'},
                                    {data: 'bin3'},
                                    {data: 'bin4'},
                                    {data: 'bin5'},
                                    {data: 'bin6'},
                                    {data: 'bin7'},
                                    {data: 'bin8'},
                                    {data: 'bin9'},
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
