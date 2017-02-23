import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {BoardSerialMapComponent} from "./boardSerialMap.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: BoardSerialMapComponent
}];

export const BoardSerialMapRouting = RouterModule.forChild(moduleRoutes);

