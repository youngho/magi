import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {YieldAbnormalComponent} from "./yieldAbnormal.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: YieldAbnormalComponent
}];

export const YieldAbnormalRouting = RouterModule.forChild(moduleRoutes);

