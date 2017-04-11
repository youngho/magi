import {Component, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from "wijmo/wijmo";
import * as wjcGrid from "wijmo/wijmo.grid";
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {BoardSerialMapService} from "./boardSerialMap.service";
import {BoardSerialMap} from './boardSerialMap.model';

@FadeInTop()
@Component({
    selector: 'boardSerialMap',
    templateUrl: 'boardSerialMap.component.html',
    providers: [BoardSerialMapService, BoardSerialMap]
})
export class BoardSerialMapComponent {

    constructor(private service: BoardSerialMapService) {
    }

    startDate = "";
    endDate = "";
    empty = true;
    componentData = null;
    errorMessage = null;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    private data: BoardSerialMap = new BoardSerialMap();


    resetForm() {
        this.data = new BoardSerialMap();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
    }

    retrieveExecute() {
        console.log("endTimeStart : " + this.data.endTimeStart);
        console.log("endTimeEnd : " + this.data.endTimeEnd);

        this.service.retrieveService(this.data)
            .subscribe((apps) => {
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                        // this.stopRefreshing();
                    }
                },
                error => this.errorMessage = error);
    }

    ngOnInit() {
    }


}
