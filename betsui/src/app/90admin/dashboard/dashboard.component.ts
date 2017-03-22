import {Component, OnInit} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {DashboardService} from "./dashboard.service";



@FadeInTop()
@Component({
    selector: 'DashboardComponent',
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    constructor(private service: DashboardService) {
    }

    errorMessage = null;
    lowYieldLot : any[];

    ngOnInit() {
        this.service.retrievePost()
            .subscribe((apps) => {
                    console.log(apps);
                    this.lowYieldLot = apps.lowYieldLot;
                },
                error => this.errorMessage = error);

    } // ngOnInit End








}
