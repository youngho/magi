import {Component, OnInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {CommonModule} from "@angular/common";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {SettingsService} from "./settings.service";

import {Setting} from './settings.model';
import {NotificationService} from "../../shared/utils/notification.service";

/**
 * 1. File name     : settings.component.ts
 * 2. Discription   : 사용자 설정화면
 * 3. writer        : yhkim     2017.06.18
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0902 : Setting
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'SettingsRetrieveComponent',
    templateUrl: 'settings.component.html',
    providers: [SettingsService, Setting]
})

export class SettingsComponent implements OnInit {
    UIID: string = "BETS-UI-0902";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    message = null;
    submitted = false;
    private colInfo = new Array();
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    @ViewChild('lgModal') bgModel;
    public loading = false; // Control for Grid Table Spinner

    retrieveCondDto = {
        betsKey: "",
        betsValue: "",
        betsKeyDesc: "",
        settingUser: "",
    };

    constructor(private service: SettingsService, private notificationService: NotificationService, private setting: Setting) {
    }

    /**
     *
     */
    newData() {
        this.bgModel.show();
    }

    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    someClickHandler(info: any): void {
        this.message = info.betsKey + ' - ' + info.betsValue;

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.setting.betsKey = info.betsKey;
        this.setting.betsValue = info.betsValue;

        this.service.postRetrieveByKey(this.setting)
            .subscribe((response) => {
                    //JSON 객체로 가져오는것을 this.programRegister 에 넣어야 한다.

                    this.setting = Setting.fromJSON(response);
                },
                error => alert(error));

        this.bgModel.show(function (info: any) {
            // console.log(info.boardTypeNo);
        });

    }

    resetForm() {
        this.retrieveCondDto = new Setting();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
        this.gridData = null;
        this.empty = true;
    }

    retrieveExecute() {
        console.log("betsKey : " + this.setting.betsKey);
        console.log("betsValue : " + this.setting.betsValue);
        this.loading = true;
        this.service.postRetrieve(this.retrieveCondDto)
            .subscribe((apps) => {
                    this.loading = false;              // 데이터 조회중 표시 기능 여부
                    this.gridData = new wjcCore.CollectionView(apps);
                    if (this.gridData.isEmpty) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                },
                error => {
                    this.loading = false;
                    this.empty = true;
                    this.errorMessage = error;
                });

    }

    saveForm() {
        this.smartModEg1();
        this.submitted = true;
    }

    /**
     * 저장전 확인 팝업창 호출함수
     */
    smartModEg1() {
        this.notificationService.smartMessageBox({
            title: "BETS Alert!",
            content: "Do you want to save it?",
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.service.save(this.setting).subscribe(
                    data => this.setting = data,
                    error => alert(error),
                    () => this.bgModel.hide());
                /*                this.notificationService.smallBox({
                 title: "Callback function",
                 content: "<i class='fa fa-clock-o'></i> <i>You pressed Yes...</i>",
                 color: "#659265",
                 iconSmall: "fa fa-check fa-2x fadeInRight animated",
                 timeout: 4000
                 });*/
            }
            if (ButtonPressed === "No") {
                /*                this.notificationService.smallBox({
                 title: "Callback function",
                 content: "<i class='fa fa-clock-o'></i> <i>You pressed No...</i>",
                 color: "#C46A69",
                 iconSmall: "fa fa-times fa-2x fadeInRight animated",
                 timeout: 4000
                 });*/
            }
        });
    }

    /*
     onSelectDateFrom(strDate: string) {
     this.data.sysDateStart = strDate;
     }

     onSelectDateTo(strDate: string) {
     this.data.sysDateEnd = strDate;
     }
     */

    ngOnInit() {
    }
}
