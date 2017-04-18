import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {AlertService, AuthenticationService} from "../../core/services/index";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {User} from "./user.model";
import {LoginService} from "./login.service";
import { Http, Headers, Response } from '@angular/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    private data : User = new User();
    tableForm: FormGroup;
    username: FormControl;
    password: FormControl;

    constructor(private fb: FormBuilder, private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private service: LoginService,
                private alertService: AlertService) {

        this.username = new FormControl('', [Validators.required, Validators.minLength(10)]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(11)]);

        this.tableForm = fb.group({
            username: this.username,
            password: this.password,
        });

    }


    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(f) {
        console.log(this.tableForm.value);
        //console.log("로그인 이름 : " + this.model.username + "패스워드 : " + this.model.password);

        this.loading = true;
        this.service.postRetrieve(f)
            .subscribe(
                (response: User) => {
                    // login successful if there's a jwt token in the response
                    console.log(response);
                    let user = response;
                    if (user && user.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        console.log("유저 : " +user.username + " 토큰 : " + user.token);
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        localStorage.setItem('token', user.token);
                        localStorage.setItem('loginId', user.username);
                        localStorage.setItem('loginName', user.name);
                    }
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });

        // event.preventDefault();
        // this.router.navigate(['/dashboard'])
    }

}
