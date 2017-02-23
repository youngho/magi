import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {DataSummaryComponent} from "./dataSummary.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: DataSummaryComponent
}];

export const DataSummaryRouting = RouterModule.forChild(moduleRoutes);

