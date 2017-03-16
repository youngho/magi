import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {LcRevisionComponent} from "./lcRevision.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: LcRevisionComponent
}];

export const LcRevisionRouting = RouterModule.forChild(moduleRoutes);

