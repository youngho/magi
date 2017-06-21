import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {PassChangeService} from "./passChange.service";
import {NotificationService} from "../../shared/utils/notification.service";

import {User} from "../../90admin/register/user.model"
import {UserUsage} from "../../shared/usage/userUsage.model";

@FadeInTop()
@Component({
    selector: 'PassChangeComponent',
    templateUrl: 'PassChange.component.html',
    styles: ['select.input-sm {height: 20px;line-height: 20px;} label {margin-bottom: 0px;}'],
    providers: [PassChangeService, PassChangeComponent]
})
// export class PassChangeComponent implements OnInit, OnChanges {
export class PassChangeComponent implements OnInit {

    UIID: string = "BETS-UI-0904";
    private usageInfo = new UserUsage();
    private user = new User();

    public validationOptions = {
        rules: {
            partNumber: {
                required: true
            },
            processCode: {
                required: true,
            },
            mainProgramName: {
                required: true,
            },
            temperature: {
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
                required: 'Please enter Process Code',
                digits: 'Digits only please'
            },
            mainProgramName: {
                required: 'Please enter Program Name'
            },
        },

    };

    constructor(private service: PassChangeService, private notificationService: NotificationService) {
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

        this.user.username = localStorage.getItem("loginId");
        this.user.name = localStorage.getItem("loginName");
        // this.user.password = "test";
        this.user.authority = localStorage.getItem("authority");
    }

    submitted = false;

    resetForm() {
        this.user = new User();
        return false;
    }

    saveForm() {
        console.log(this.user);
        this.smartModEg1();
        this.submitted = true;
    }

    smartModEg1() {
        this.notificationService.smartMessageBox({
            title: "BETS Alert!",
            // content: "Do you want to Change Password?",
            content: "Do you want to Change Password?",
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed === "Yes") {
                this.user.isAccountNonExpired = true;
                this.user.isAccountNonLocked = true;
                this.user.isCredentialsNonExpired = true;
                this.user.isEnabled = true;
                this.service.save(this.user).subscribe(
                    data => {
                        // this.user = data;
                    },
                    error => alert(error),
                    () => console.log("Finish onSave()"));
            }
            if (ButtonPressed === "No") {
            }
        });
    }
}