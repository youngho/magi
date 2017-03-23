import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import DynamicComponent from './dynamic-component';
import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';

import {DatatableComponent} from './datatable.component';
import {Lotyield} from './lotyield.model';
import {lotyieldService} from "./lotyield.service";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import * as wjcGridFilter from 'wijmo/wijmo.grid.filter';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'lotyield',
    templateUrl: './lotyield.component.html',
    providers: [lotyieldService, Lotyield]
})

export class lotyieldComponent implements OnInit {
    componentData = null;
    errorMessage = null;
    startDate = "";
    endDate = "";
    gridData: wjcCore.CollectionView;
    // private data : Lotyield = new Lotyield();
    private data: Lotyield = new Lotyield();

    // onSelectDateFrom(strDate: string) {
    //     debugger;
    //     null != strDate ? this.data.endTimeStart = strDate + "000000" : this.data.endTimeStart = strDate;
    // }
    //
    // onSelectDateTo(strDate: string) {
    //     null != strDate ? this.data.endTimeEnd = strDate + "999999" : this.data.endTimeEnd = strDate;
    // }

    constructor(private retrieveLastTableService: lotyieldService) {
        //this.data.partnumberName = 'K9CFGY8U5A-CCK0000-HXBPHV';
    }

    resetForm() {
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
        this.data.endTimeStart = this.startDate + "000000";
        this.data.endTimeEnd = this.endDate + "999999";
        this.retrieveLastTableService.postLastTable(this.data)
            .subscribe((apps) => {
                    this.gridData = new wjcCore.CollectionView(apps);
                },
                error => this.errorMessage = error);
    }

    ngOnInit() {
        // let rightNow = new Date();
        // let res = rightNow.toISOString().slice(0,10).replace(/-/g,"");
        // this.data.endTimeStart =res + "000000";
        // this.data.endTimeEnd = res +  "999999";
        //
        // this.retrieveLastTableService.postLastTable(this.data)
        //     .subscribe((apps) => {
        //             this.gridData=new wjcCore.CollectionView(apps);
        //         },
        //         error => this.errorMessage = error);

    }
}
