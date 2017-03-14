import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {DatatableComponent} from './datatable.component';
import {BoardSerialMapService} from "./boardSerialMap.service";
import {BoardSerialMap} from './boardSerialMap.model';

@FadeInTop()
@Component({
    selector: 'boardSerialMap',
    templateUrl: 'boardSerialMap.component.html',
    providers: [BoardSerialMapService, BoardSerialMap]
})
export class BoardSerialMapComponent implements OnInit {

    constructor(private service: BoardSerialMapService) {
    }

    componentData = null;
    errorMessage = null;
    private data: BoardSerialMap = new BoardSerialMap();
    private colInfo = new Array();

    onSelectDateFrom(strDate: string) {
        this.data.endTimeStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.data.endTimeEnd = strDate;
    }

    resetForm() {
        this.data = new BoardSerialMap();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
    }

    retrieveExecute() {
        console.log("endTimeStart : " + this.data.endTimeStart);
        console.log("endTimeEnd : " + this.data.endTimeEnd);

        this.service.retrieveService(this.data)
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
