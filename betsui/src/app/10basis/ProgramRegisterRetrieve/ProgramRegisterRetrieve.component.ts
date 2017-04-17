import {Component, OnInit, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {ProgramRegisterRetrieveService} from "./ProgramRegisterRetrieve.service";

import {ProgramRegister} from "../ProgramRegister.model";
import {DatatableComponent} from "./datatable.component";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import * as wjcInput from 'wijmo/wijmo.input';
import {NotificationService} from "../../shared/utils/notification.service";

@FadeInTop()
@Component({
    selector: 'ProgramRegisterRetrieveComponent',
    styles: ['@media screen and (min-width:992px){.modal-lg{width: 1080px;}} .modal-lg .form-horizontal {margin:13px;}'],
    templateUrl: 'ProgramRegisterRetrieve.component.html',
    providers: [ProgramRegisterRetrieveService, ProgramRegister]
})

export class ProgramRegisterRetrieveComponent implements OnInit {
    empty = true;
    componentData = null;
    errorMessage = null;
    gridData: wjcCore.CollectionView;
    private colInfo = new Array();// Grid dynamic columns title
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;

    @ViewChild('lgModal') bgModel;
    retrieveCondDto = {
        partNumber: "",
        processCode: "",
        testerModel: "",
    };

    retrieveByKeyDto = {
        createDate: "",
    };

    constructor(private service: ProgramRegisterRetrieveService, private notificationService: NotificationService, private programRegister: ProgramRegister) {
    }

    submitted = false;

    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler = (flexGrid) => {
        if (!this.flexGrid) {
            return;
        }
        let info: any
        info = flexGrid.selectedItems[0];
        console.log(info.createDate);

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.retrieveByKeyDto.createDate = info.createDate;
        this.retrieveByKeyDto.createDate = this.retrieveByKeyDto.createDate.replace(/:/g, "");
        this.retrieveByKeyDto.createDate = this.retrieveByKeyDto.createDate.replace(" ", "");
        this.retrieveByKeyDto.createDate = this.retrieveByKeyDto.createDate.replace(/-/g, "");

        this.service.postRetrieveByKey(this.retrieveByKeyDto)
            .subscribe((response) => {
                    //JSON 객체로 가져오는것을 this.programRegister 에 넣어야 한다.
                    this.programRegister = ProgramRegister.fromJSON(response);
                },
                error => alert(error));


        this.bgModel.show();
    }
    //팝업 객체로부터 이벤트를 받아 팝업 모달 창을 닫음(감춤);
    modalClose(clsoe: boolean){
        
        if(clsoe){
            this.bgModel.hide();
        }
        this.retrieveExecute();
    }
    onGridLoaded(){
        var self = this;
        setTimeout(function() {
            self.flexGrid.autoSizeColumns();
        },300);
    }
    resetForm() {
        this.retrieveCondDto.partNumber = null;
        this.retrieveCondDto.processCode = null;
        this.retrieveCondDto.testerModel = null;
    }

    retrieveExecute() {
        this.service.postRetrieve(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                },
                error => this.errorMessage = error);
    }

    exportExcel() {
        let rightNow = new Date();
        let res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");

        wjcGridXlsx.FlexGridXlsxConverter.save(this.flexGrid, {
            includeColumnHeaders: true,
            includeCellStyles: false
        }, res + '_programreg' + '.xlsx');
    }

    onSelectDateFrom(strDate: string) {
        this.programRegister.createDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        this.programRegister.createDateEnd = strDate;
    }

    ngOnInit() {
    }
}
