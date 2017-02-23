import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {BoardCompositeMapComponent} from "./boardCompositeMap.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: BoardCompositeMapComponent
}];

export const BoardCompositeMapRouting = RouterModule.forChild(moduleRoutes);

