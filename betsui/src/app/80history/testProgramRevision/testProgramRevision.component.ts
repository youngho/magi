import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {ProgramRevisionService} from "./testProgramRevision.service";

import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';
import {DynamicComponent} from './dynamic-component';
import {DatatableComponent} from './datatable.component';
import {ProgramRevision} from './testProgramRevision.model';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'testProgramRevision',
    templateUrl: 'testProgramRevision.component.html',
    providers: [ProgramRevisionService, ProgramRevision]
})
export class ProgramRevisionComponent implements OnInit {

    constructor(private service: ProgramRevisionService) {
    }

    componentData = null;
    errorMessage = null;
    private data: ProgramRevision = new ProgramRevision();
    private colInfo = new Array();

    onSelectDateFrom(strDate: string) {
        this.data.createDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.data.createDateEnd = strDate;
    }

    saveLastTableForm() {
        console.log("endTimeStart : " + this.data.createDateStart);
        console.log("createDateEnd : " + this.data.createDateEnd);
        console.log("partNumber : " + this.data.partNumber);
        console.log("processCode : " + this.data.processCode);
        console.log("testerModel : " + this.data.testerModel);


        this.service.postLastTable(this.data)
            .subscribe((apps) => {

                    console.log(apps);
                    //debugger;
                    this.colInfo = [];
                    var tempStr;
                    var apps_obj = apps[0];
                    if (apps_obj != null) {
                        for (var key in apps_obj) {
                            // var value = key;
                            //console.log("===>" + value)
                            tempStr = {"title": key, "data": key};
                            this.colInfo.push(tempStr);
                        }
                    }else {
                        // 컬럼을 동적으로 만들경우 DB에서 0건으로 검색되면 컬럼명도 가져오지 못한다.
                        // 때문에 임의의 컬럼명을 만들어서 테이블을 그린다. 이때 데이터가 없어 'No data available in table' 메시지가 표시된다.
                        console.log("columns return 0");
                        this.colInfo.push({"title": "No Data", "data": "noData"});
                    }

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
