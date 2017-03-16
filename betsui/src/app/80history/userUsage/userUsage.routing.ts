import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {UserUsageComponent} from "./userUsage.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: UserUsageComponent
}];

export const UserUsageRouting = RouterModule.forChild(moduleRoutes);

