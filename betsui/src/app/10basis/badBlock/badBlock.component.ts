import {Component, OnInit, ViewChild} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {BadBlockService} from "./badBlock.service";
import {NotificationService} from "../../shared/utils/notification.service";
import {BadBlock} from "./badBlock.model";
import {concat} from "rxjs/observable/concat";
import {UserUsage} from "../../shared/usage/userUsage.model";

@FadeInTop()
@Component({
    selector: 'BadBlock',
    templateUrl: 'badBlock.component.html',
    providers: [BadBlockService, BadBlock, UserUsage]
})
export class BadBlockComponent implements OnInit {

    UIID: string = "BETS-UI-0108";
    startDate = "";
    endDate = "";
    empty = true;
    errorMessage = null;
    submitted = false;
    private colInfo = new Array();
    public isRequesting: boolean;
    gridData: wjcCore.CollectionView;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    @ViewChild('lgModal') bgModel;
    private usageInfo = new UserUsage();

    retrieveCondDto = {
        lotId: "",
        cid: "",
        wf: "",
        x: "",
        y: "",
        badCnt: ""
    };

    public validationOptions = {
        rules: {
            partNumber: {
                required: true
            },
            processCode: {
                required: true,
                digits: true
            }
        },

        // Messages for form validation
        messages: {
            partNumber: {
                required: 'Please enter Part Number'
            },
            processCode: {
                required: 'Enter year',
                digits: 'Digits only please'
            }
        },

    };

    constructor(private service: BadBlockService, private notificationService: NotificationService, private badBlock: BadBlock) {
    }

    ngOnInit() {
        // this.data.createDate = It makes server side service class
        this.usageInfo.userId = localStorage.getItem("loginId");
        this.usageInfo.uiId = this.UIID;
        this.service.postUsage(this.usageInfo).subscribe(
            data => this.usageInfo = data,
            error => alert(error),
            () => console.log("Finish onSave()")
        );
    }


    resetForm() {
        this.badBlock = new BadBlock();  //이 클래스가 INPUT박스와 바인딩되어 있어 초기화 한다.
    }

    saveForm() {
        console.log(this.badBlock);
        // console.log('submitting LastTable form @' + this.tableForm);

        // this.badBlock.createUser = localStorage.getItem('loginId');  //브라우저의 localStorage 에서 로그인 아이디를 가져와 저장시 넘긴다.

        //개발시 로그인 아이디가 없을경우 사용하기 위해 넣은 코드
        if (localStorage.getItem('loginId') === null) {
            // this.badBlock.createUser = 'devdev';
        }
        this.smartModEg1();

        this.submitted = true;
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
        console.log(info.createDate);

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.badBlock.lotId = info.lotId;
        this.badBlock.cid = info.cid;

        this.service.postRetrieveByKey(this.badBlock)
            .subscribe((response) => {
                    this.badBlock = BadBlock.fromJSON(response);
                },
                error => alert(error));

        this.bgModel.show(function (info: any) {
            console.log(info.testerNumber);
        });

    }

    smartModEg1() {
        this.notificationService.smartMessageBox({
            title: "BETS Alert!",
            content: "Do you want to save it?",
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.service.save(this.badBlock).subscribe(
                    data => this.badBlock = data,
                    error => alert(error),
                    () => console.log("Finish onSave()"));
            }
            if (ButtonPressed === "No") {

            }

        });
    }


}
