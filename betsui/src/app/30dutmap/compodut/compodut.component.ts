import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {CompoDutService} from "./compodut.service";
import {CompoDut} from './compodut.model';
import {DatatableComponent} from './datatable.component';
import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';

@FadeInTop()
@Component({
    selector: 'CompoDutBin',
    templateUrl: 'compodut.component.html',
    providers: [CompoDutService, CompoDut]
})
export class CompoDutComponent implements OnInit {

    constructor(private service: CompoDutService) {}

    componentData = null;
    errorMessage = null;
    private data: CompoDut = new CompoDut();
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
