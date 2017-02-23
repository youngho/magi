import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {TestLotCancelComponent} from "./testLotCancel.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: TestLotCancelComponent
}];

export const TestLotCancelRouting = RouterModule.forChild(moduleRoutes);

