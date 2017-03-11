import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {ProgramRevisionComponent} from "./testProgramRevision.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: ProgramRevisionComponent
}];

export const ProgramRevisionRouting = RouterModule.forChild(moduleRoutes);

