//import { Component } from '@angular/core';
import {Authority} from "./authority";
import {AuthorityViewService} from "./authority-view.service";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../../core/post.model';
import { PostService } from '../../core/post.service';

@Component({
    selector: 'authorityView',
    templateUrl: 'authority-view.template.html',
    providers:[AuthorityViewService]
})
//export class authorityViewComponent {
    //public authority = new Authority("","");
export class authorityViewComponent implements OnInit, OnDestroy {
    data = { user_nm: '', authority_nm: '' };

    public authoritys:Authority[];
    sub: Subscription;

    constructor(private authorityViewService: AuthorityViewService, private router: Router) { }

    //constructor(private authorityViewService:AuthorityViewService){}

    ngOnInit(){
/*
        this.authorityViewService.getAuthority().subscribe(
            data => this.authoritys = data,
            error => alert(error),
            () => console.log("Finish")
        )
*/
    }

    onSave(){
        console.log("onSave()에 넘어온 값 = " + this.data.user_nm + ":" + this.data.authority_nm);
        this.authorityViewService
            .postAuthority(this.data)
            .subscribe(
            data => this.data = data,
            error => alert(error),
            () => console.log("Finish onSave()")
        )

    }
    /*save() {
        console.log('saving post data!' + this.data);
        this.postService
            .savePost(this.data)
            .subscribe(res => {
                this.router.navigate(['', 'posts']);
            });
    }*/

    ngOnDestroy() {
        // if (this.sub) {
        //   this.sub.unsubscribe();
        // }
    }
}