import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {SingleDutComponent} from "./singledut.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: SingleDutComponent
}];

export const SingleDutRouting = RouterModule.forChild(moduleRoutes);

