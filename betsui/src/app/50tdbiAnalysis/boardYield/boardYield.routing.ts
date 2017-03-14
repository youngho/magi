import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {BoardYieldComponent} from "./boardYield.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: BoardYieldComponent
}];

export const BoardYieldRouting = RouterModule.forChild(moduleRoutes);

