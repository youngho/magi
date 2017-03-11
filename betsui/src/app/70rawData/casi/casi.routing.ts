import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {CasiComponent} from "./casi.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: CasiComponent
}];

export const CasiRouting = RouterModule.forChild(moduleRoutes);

