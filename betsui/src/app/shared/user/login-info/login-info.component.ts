import {Component, OnInit} from "@angular/core";
import {UserService} from "../user.service";
import {LayoutService} from "../../layout/layout.service";

@Component({

    selector: 'sa-login-info',
    templateUrl: './login-info.component.html',
    styles: [`
            .login-info { color: black; font-size:20px; }
          `],

})
export class LoginInfoComponent implements OnInit {

    currentUser;
    loginId: string;
    loginName: string;

    constructor(private userService: UserService,
                private layoutService: LayoutService) {
    }

    ngOnInit() {
        //this.currentUser = this.userService.getLoginInfo();
        // console.log("currentUser : " + this.currentUser);
        this.loginId = localStorage.getItem("loginId");
        this.loginName = localStorage.getItem("loginName");
    }

    toggleShortcut() {
        this.layoutService.onShortcutToggle()
    }

}
