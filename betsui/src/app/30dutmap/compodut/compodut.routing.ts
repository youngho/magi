import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {CompoDutComponent} from "./compodut.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: CompoDutComponent
}];

export const CompoDutRouting = RouterModule.forChild(moduleRoutes);

