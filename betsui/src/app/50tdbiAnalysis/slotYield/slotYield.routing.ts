import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {SlotYieldComponent} from "./slotYield.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: SlotYieldComponent
}];

export const SlotYieldRouting = RouterModule.forChild(moduleRoutes);

