import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {YieldAbnormalService} from "./yieldAbnormal.service";

import {YieldAbnormal} from './yieldAbnormal.model';

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'SingledDutBin',
    templateUrl: 'yieldAbnormal.component.html',
    providers: [YieldAbnormalService,YieldAbnormal]
})
export class YieldAbnormalComponent implements OnInit {
    constructor(private service: YieldAbnormalService) {}

    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    private data : YieldAbnormal = new YieldAbnormal();

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
        this.data.sblMode = null;
    }

    saveLastTableForm() {
        // console.log("sysDateStart : " + this.data.sysDateStart);
        // console.log("sysDateEnd : " + this.data.sysDateEnd);
        // console.log("partnumberName : " + this.data.partnumberName);
        // console.log("lotNumber : " + this.data.lotNumber);
        // console.log("processName : " + this.data.processName);
        // console.log("testCount : " + this.data.testCount);
        // console.log("testerName : " + this.data.testerName);
        // console.log("testerHead : " + this.data.testerHead);

        this.service.postLastTable(this.data)
            .subscribe((apps) => {
                    console.log(apps);
                    // debugger;
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
