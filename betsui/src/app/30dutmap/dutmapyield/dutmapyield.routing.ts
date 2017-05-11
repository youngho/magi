import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {DutMapYieldComponent} from "./dutmapyield.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: DutMapYieldComponent
}];

export const DutMapYieldRouting = RouterModule.forChild(moduleRoutes);

