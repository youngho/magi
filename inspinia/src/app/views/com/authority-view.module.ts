import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {authorityViewComponent} from "./authority-view.component";

@NgModule({
    declarations: [authorityViewComponent],
    imports: [BrowserModule, FormsModule],
})

export class AuthorityViewModule {
}