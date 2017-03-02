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

    constructor(private service: RegisterService, private notificationService: NotificationService) {
    }

    /**
     * 리스트 클릭시에 호출되는 함수로 팝업창을 보여주고 폼 컨트롤에 데이터를 로드한다.
     * @param info
     */

    /*
     someClickHandler(info: any): void {
     this.message = info.testerModel + ' - ' + info.partNumber;

     //리스트에서 선택된 ROW의 키를 셋팅하여 조회한다
     this.data.testerModel = info.testerModel;

     (<FormControl>this.tableForm.controls['product'])
     .setValue(info.testerModel, { onlySelf: true });

     this.bgModel.show(function (info:any) {
     console.log(info.testerModel);
     });

     }
     */

    saveLastTableForm() {
        console.log("testerModel : " + this.user.username);
        console.log("testerModel : " + this.user.name);

        this.service.postRetrieve(this.user)
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
                                /*
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
                                 */

                                buttons: [
                                    'copy', 'excel', 'pdf', 'print'
                                ]
                            }
                        }
                    };
                },
                error => this.errorMessage = error);
    }

    saveForm(f) {
        // console.log(this.tableForm.value);
        // console.log('submitting LastTable form @' + this.tableForm);

        this.smartModEg1(f);





    }

    smartModEg1(f) {
        this.notificationService.smartMessageBox({
            title: "Smart Alert!",
            content: "This is a confirmation box. Can be programmed for button callback",
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.service.save(f).subscribe(
                    data => this.user = data,
                    error => alert(error),
                    () => console.log("Finish onSave()"));

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
