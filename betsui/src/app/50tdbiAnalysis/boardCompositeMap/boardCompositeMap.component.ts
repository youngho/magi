import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {BoardCompositeMapService} from "./boardCompositeMap.service";

import {BoardCompositeMap} from './boardCompositeMap.model';

import {DatatableComponent} from './datatable.component';
import DynamicComponent from './dynamic-component';

declare var $: any;

@FadeInTop()
@Component({
    selector: 'boardCompositeMap',
    templateUrl: 'boardCompositeMap.component.html',
    providers: [BoardCompositeMapService, BoardCompositeMap]
})
export class BoardCompositeMapComponent implements OnInit {

    constructor(private service: BoardCompositeMapService) {
    }

    componentData = null;
    errorMessage = null;
    private data: BoardCompositeMap = new BoardCompositeMap();
    private colInfo = new Array();

    onSelectDateFrom(strDate: string) {
        null != strDate ? this.data.biEndTimeStart = strDate + "000000" : this.data.biEndTimeStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        null != strDate ? this.data.biEndTimeEnd = strDate + "999999" : this.data.biEndTimeEnd = strDate;
    }

    saveLastTableForm() {
        console.log("biEndTimeStart : " + this.data.biEndTimeStart);
        console.log("biEndTimeEnd : " + this.data.biEndTimeEnd);
        console.log("partnumberName : " + this.data.biPartNumber);
        console.log("lotNumber : " + this.data.biLotId);
        console.log("processName : " + this.data.biProcessCode);
        console.log("testerName : " + this.data.biTesterModel);
        console.log("testerHead : " + this.data.biTestNumber);

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
                    } else {
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
