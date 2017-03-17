import {Component, OnInit} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {SingleDutService} from "./singledut.service";
import {SingleDut} from "./singledut.model";
import {DatatableComponent} from "./datatable.component";

@FadeInTop()
@Component({
    selector: 'SingledDutBin',
    templateUrl: 'singledut.component.html',
    providers: [SingleDutService, SingleDut]
})
export class SingleDutComponent implements OnInit {

    constructor(private service: SingleDutService) {
    }

    componentData = null;
    errorMessage = null;
    private data: SingleDut = new SingleDut();
    private colInfo = new Array();
    public isRequesting: boolean;

    resetForm() {
        this.data = new SingleDut();
    }

    onSelectDateFrom(strDate: string) {
        null != strDate ? this.data.endTimeStart = strDate + "000000" : this.data.endTimeStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        null != strDate ? this.data.endTimeEnd = strDate + "999999" : this.data.endTimeEnd = strDate;
    }

    saveLastTableForm() {
        this.isRequesting = true;
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
                error => this.errorMessage = error,
                () => this.stopRefreshing(),
            );
    }

    ngOnInit() {
    }

    private
    stopRefreshing() {
        this.isRequesting = false;
    }
}
