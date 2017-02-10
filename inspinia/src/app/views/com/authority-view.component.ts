import { Component } from '@angular/core';
import {Authority} from "./authority";
import {AuthorityViewService} from "./authority-view.service";

@Component({
    selector: 'authorityView',
    templateUrl: 'authority-view.template.html',
    providers:[AuthorityViewService]
})
export class authorityViewComponent {
    public authoritys:Authority[];
    public authority = new Authority("","");


    constructor(private authorityViewService:AuthorityViewService){

    }

    ngOnInit(){
        this.authorityViewService.getAuthority().subscribe(
            data => this.authoritys = data,
            error => alert(error),
            () => console.log("Finish")
        )
    }

    onSave(){
        console.log("onSave()에 넘어온 값 = " + this.authority.user_nm + ":" + this.authority.authority_nm);
        this.authorityViewService.postAuthority(this.authority).subscribe(
            data => this.authority = data,
            error => alert(error),
            () => console.log("Finish onSave()")
        )

    }
}