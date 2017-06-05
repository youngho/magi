import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {BoardCompositeSocketYieldComponent} from "./boardCompositeSocketYield.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: BoardCompositeSocketYieldComponent
}];

export const BoardCompositeSocketYieldRouting = RouterModule.forChild(moduleRoutes);

