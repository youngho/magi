import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {SubBinAbnormalComponent} from "./subBinAbnormal.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: SubBinAbnormalComponent
}];

export const SubBinAbnormalRouting = RouterModule.forChild(moduleRoutes);

