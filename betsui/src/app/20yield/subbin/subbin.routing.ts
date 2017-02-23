import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {SubBinComponent} from "./subbin.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: SubBinComponent
}];

export const SubBinRouting = RouterModule.forChild(moduleRoutes);

