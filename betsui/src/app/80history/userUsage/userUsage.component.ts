import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {UserUsageService} from "./userUsage.service";
import {DatatableComponent} from './datatable.component';
import {UserUsage} from './userUsage.model';

@FadeInTop()
@Component({
    selector: 'userUsage',
    templateUrl: 'userUsage.component.html',
    providers: [UserUsageService, UserUsage]
})
export class UserUsageComponent implements OnInit {
    UIID: string = "BETS-UI-0803";

    constructor(private service: UserUsageService) {
    }

    componentData = null;
    errorMessage = null;
    private data: UserUsage = new UserUsage();

    onSelectDateFrom(strDate: string) {
        null != strDate ? this.data.createDateStart = strDate + "000000" : this.data.createDateStart = strDate;
    }

    onSelectDateTo(strDate: string) {
        null != strDate ? this.data.createDateEnd = strDate + "999999" : this.data.createDateEnd = strDate;
    }

    resetForm() {
        this.data = new UserUsage();
    }

    retrieveExecute() {
        // console.log("createDateStart : " + this.data.createDateStart);
        // console.log("createDateEnd : " + this.data.createDateEnd);
        // console.log("userId : " + this.data.userId);
        // console.log("uiId : " + this.data.uiId);

        this.service.postLastTable(this.data)
            .subscribe((apps) => {
                    this.componentData = {
                        component: DatatableComponent,
                        inputs: {
                            options: {
                                dom: 'Bfrtip',
                                fixedColumns: true,
                                colReorder: true,
                                scrollX: true,
                                data: apps,
                                columns: [
                                    {data: 'createDate'},
                                    {data: 'userId'},
                                    {data: 'uiId'},
                                ],
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
        // this.data.createDate = "20170321134000";
        this.data.userId = "youngho";
        this.data.uiId = this.UIID;
        this.service.postUsage(this.data).subscribe(
            data => this.data = data,
            error => alert(error),
            () => console.log("Finish onSave()")
        );
    }


}
