import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";
import {DynamicComponent} from "./dynamic.component";
import {SingleDutComponent} from "./singledut.component";
import {SingleDutRouting} from "./singledut.routing";
import {DatatableComponent} from "./datatable.component";
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {SmartadminFormsModule} from "../../shared/forms/smartadmin-forms.module";
import {SpinnerComponent} from "../../shared/spinner/spinner.component";

@NgModule({
    imports: [
        CommonModule,
        SingleDutRouting,
        SmartadminModule,
        SmartadminInputModule,
        SmartadminDatatableModule,
        // BETS ADDED
        SmartadminFormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SingleDutComponent, DynamicComponent, DatatableComponent, SpinnerComponent]
})
export class SingleDutModule {
}
