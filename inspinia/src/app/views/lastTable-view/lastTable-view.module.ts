import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {lastTableViewComponent} from "./lastTable-view.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslateModule } from '../../shared/app-translate.module';

@NgModule({
    declarations: [lastTableViewComponent],
    imports     : [BrowserModule,FormsModule,ReactiveFormsModule,AppTranslateModule],
    exports: [
        AppTranslateModule
    ],
})

export class lastTableViewModule {}