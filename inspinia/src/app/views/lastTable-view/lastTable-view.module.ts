import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {lastTableViewComponent} from "./lastTable-view.component";

import {AppTranslateModule} from '../../shared/app-translate.module';

@NgModule({
    declarations: [lastTableViewComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppTranslateModule],
    exports: [
        AppTranslateModule
    ],
})

export class lastTableViewModule {
}