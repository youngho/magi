import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";

import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";


import {ProgramRegisterRetrieveComponent} from "./ProgramRegisterRetrieve.component";
import {ProgramRegisterRetrieveRouting} from "./ProgramRegisterRetrieve.routing";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import {ProgramRegisterViewComponent} from "./ProgramRegisterView.component"
import {TestModule} from "../../test/test.module";
import {IncludesModule} from "../../shared/includes/Includes.module";



@NgModule({
    imports: [
        WjInputModule, WjGridModule, WjGridFilterModule,
        CommonModule,
        ProgramRegisterRetrieveRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        SmartadminFormsModule,
        FormsModule,
        ReactiveFormsModule,
        IncludesModule,
    ],
    declarations: [ProgramRegisterRetrieveComponent]
})
export class ProgramRegisterRetrieveModule {
}
