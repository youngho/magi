import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {TestLotCancelService} from "./testLotCancel.service";
import {TestLotCancel} from './testLotCancel.model';
import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';
import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'TestLotCancel',
    templateUrl: 'testLotCancel.component.html',
    providers: [TestLotCancelService, TestLotCancel]
})
export class TestLotCancelComponent implements OnInit {

    constructor(private service: TestLotCancelService) {
    }

    componentData = null;
    errorMessage = null;
    private data: TestLotCancel = new TestLotCancel();
    private colInfo = new Array();

    resetForm(){
        this.data = new TestLotCancel();
    }

    onSelectDateFrom(strDate: string) {
        this.data.endTimeStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.data.endTimeEnd = strDate;
    }

    saveLastTableForm() {

        // if(this.componentData){this.componentData.}
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
                    //debugger;
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
