import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Lotyield} from './lotyield.model';
import {lotyieldService} from "./lotyield.service";
import * as wjcCore from 'wijmo/wijmo';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'lotyield',
    templateUrl: './lotyield.component.html',
    providers: [lotyieldService, Lotyield]
})

export class lotyieldComponent implements OnInit {
    empty = true;
    componentData = null;
    errorMessage = null;
    startDate = "";
    endDate = "";
    gridData: wjcCore.CollectionView;
    private data: Lotyield = new Lotyield();
    private colInfo = new Array();
    constructor(private retrieveLastTableService: lotyieldService) {
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
                    debugger;
                    this.gridData = new wjcCore.CollectionView(apps);
                    if(this.gridData.isEmpty){
                        this.empty = true;
                    }else {
                        this.empty = false;
                    }
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
