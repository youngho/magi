import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {NgBinComponent} from "./testProgramRevision.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: NgBinComponent
}];

export const NgBinRouting = RouterModule.forChild(moduleRoutes);

