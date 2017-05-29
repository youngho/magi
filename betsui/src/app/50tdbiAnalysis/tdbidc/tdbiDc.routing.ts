import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {TdbiDcComponent} from "./tdbiDc.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: TdbiDcComponent
}];

export const TdbiDcRouting = RouterModule.forChild(moduleRoutes);

