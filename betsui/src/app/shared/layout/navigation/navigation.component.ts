import {Component, OnInit, Input} from '@angular/core';
import {LoginInfoComponent} from "../../user/login-info/login-info.component";
import {NavigationService} from './navigation.service';

@Component({

    selector: 'sa-navigation',
    templateUrl: './navigation.component.html',
    providers: [NavigationService]
})

export class NavigationComponent implements OnInit {

    // data : {
    //     authority:string,
    // }
    menuData : any[];

    constructor(private service: NavigationService) {
        // this.data.authority = "ADMIN";

    }

    ngOnInit() {
/*
        this.service.retrievePost("ADMIN").subscribe(
            data => this.menuData = data,
            error => alert(error),
            () => console.log("Finish Menu()"));
*/

    }

}
