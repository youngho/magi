import {Component, OnInit, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';

import {RegisterService} from "./register.service";
import {User} from "./user.model";
import {NotificationService} from "../../shared/utils/notification.service";

/**
 * 1. File name     : register.component.ts
 * 2. Discription   : 사용자 관리화면
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0901 : User Authorization
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@FadeInTop()
@Component({
    selector: 'ProgramRegisterRetrieveComponent',
    templateUrl: 'register.component.html',
    styles: ['select.input-sm {height: 20px;line-height: 20px;} label {margin-bottom: 0px;}'],
    providers: [RegisterService]
})

export class RegisterComponent implements OnInit {
    UIID: string = "BETS-UI-0901";
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
    private user: User = new User();
    private retrieveCondDto: User = new User();
    public loading = false; // Control for Grid Table Spinner

    constructor(private service: RegisterService, private notificationService: NotificationService) {
    }

    newUser():void{
        this.user = new User();
        this.bgModel.show(function (info: any) {
            console.log(info);
        });
    }

    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */
    editByKye(flexGrid){
        if (!this.flexGrid) {
            return;
        }
        let info: any
        info = flexGrid.selectedItems[0];

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.user.username = info.username;
        this.user.name = info.name;

        this.bgModel.show(function (info: any) {
            console.log(info);
        });

    }

    retrieveExecute() {
        // console.log("username : " + this.retrieveCondDto.username);
        // console.log("name : " + this.retrieveCondDto.name);
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
        // console.log(this.tableForm.value);

        // console.log('submitting LastTable form @' + this.tableForm);

        // this.selectedOptions();

        console.log("options : " + this.user.authorities);
        this.smartModEg1();

        this.submitted = true;

    }

    smartModEg1() {
        this.notificationService.smartMessageBox({
            title: "Smart Alert!",
            content: "This is a confirmation box. Can be programmed for button callback",
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.service.save(this.user).subscribe(
                    data => this.user = data,
                    error => alert(error),
                    () => console.log("Finish onSave()"));
                    this.bgModel.hide();
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


    ngOnInit() {
    }
}
