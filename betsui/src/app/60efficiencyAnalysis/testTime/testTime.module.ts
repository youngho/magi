import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";
import {DynamicComponent} from "./dynamic.component";
import {TestTimeRouting} from "./testTime.routing";
import {TestTimeComponent} from "./testTime.component";
import {DatatableComponent} from "./datatable.component";

@NgModule({
    imports: [
        CommonModule,
        TestTimeRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        SmartadminFormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [TestTimeComponent,DynamicComponent,DatatableComponent]
})
export class TestTimeModule {
}
