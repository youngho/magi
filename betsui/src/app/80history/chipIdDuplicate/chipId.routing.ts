import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {ChipIdComponent} from "./chipId.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: ChipIdComponent
}];

export const ChipIdRouting = RouterModule.forChild(moduleRoutes);

