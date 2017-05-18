import {Component, OnInit, Input} from '@angular/core';
import {NavigationService} from './navigation.service';

@Component({

    selector: 'sa-navigation',
    templateUrl: './navigation.component.html',
    providers: [NavigationService]
})

export class NavigationComponent implements OnInit {

    menuAuthority: string

    constructor(private service: NavigationService) {
        this.menuAuthority = localStorage.getItem('authority');
    }

    ngOnInit() {
    }

}
