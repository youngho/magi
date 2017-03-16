import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {TestEfficiencyComponent} from "./testEfficiency.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: TestEfficiencyComponent
}];

export const TestEfficiencyRouting = RouterModule.forChild(moduleRoutes);

