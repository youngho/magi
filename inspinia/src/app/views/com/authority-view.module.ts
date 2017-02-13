import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserModule} from "@angular/platform-browser";
import {authorityViewComponent} from "./authority-view.component";

@NgModule({
    declarations: [authorityViewComponent],
    imports     : [BrowserModule,FormsModule],
})

export class AuthorityViewModule {}