import {Component, OnInit, ViewChild} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {RegisterService} from "./register.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {User} from "./user.model";
import {DatatableComponent} from "./datatable.component";
// import DynamicComponent from './dynamic-component';
// import {UiDatePickerComponent} from '../../shared/forms/UiDatePicker/UiDatePicker.component';
import {NotificationService} from "../../shared/utils/notification.service";

@FadeInTop()
@Component({
    selector: 'ProgramRegisterRetrieveComponent',
    templateUrl: 'register.component.html',
    providers: [RegisterService]
})

export class RegisterComponent implements OnInit {

    @ViewChild('lgModal') bgModel;

    componentData = null;
    errorMessage = null;
    message: string = '';

    private user: User = new User();
    private retrieveCondUser: User = new User();
    submitted = false;

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

    someClickHandler(info: any): void {
        this.message = info.testerModel + ' - ' + info.partNumber;

        //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
        this.user.username = info.username;
        this.user.name = info.name;


        this.bgModel.show(function (info: any) {
            console.log(info);
        });

    }

    saveLastTableForm() {
        console.log("username : " + this.retrieveCondUser.username);
        console.log("name : " + this.retrieveCondUser.name);


        this.service.postRetrieve(this.retrieveCondUser)
            .subscribe((apps) => {
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                colReorder: false,
                                data: apps,
                                //select: { style: 'single'},
                                columns: [
                                    {data: 'username'},
                                    {data: 'password'},
                                    {data: 'name'},
                                    {data: 'credentialsNonExpired'},
                                    {data: 'accountNonExpired'},
                                    {data: 'accountNonLocked'},
                                    {data: 'enabled'},
                                ],
                                rowCallback: (nRow: number, aData: any, iDisplayIndex: number, iDisplayIndexFull: number) => {
                                    let self = this;
                                    // Unbind first in order to avoid any duplicate handler
                                    // (see https://github.com/l-lin/angular-datatables/issues/87)
                                    $('td', nRow).unbind('click');
                                    $('td', nRow).bind('click', () => {
                                        self.someClickHandler(aData);
                                    });
                                    return nRow;
                                },

                                buttons: [
                                    'copy', 'excel', 'pdf', 'print'
                                ]
                            }
                        }
                    };
                },
                error => this.errorMessage = error);
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



/*
    selectedOptions() { // right now: ['1','3']
        return this.user.authorities
            .filter(opt => opt.checked)
            .map(opt => opt.value)
    }
*/


    ngOnInit() {
    }
}
