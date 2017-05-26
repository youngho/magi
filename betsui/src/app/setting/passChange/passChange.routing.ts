import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {PassChangeComponent} from "./passChange.component";

export const routes: Routes = [{
    path: '',
    component: PassChangeComponent
}];

export const PassChangeRouting = RouterModule.forChild(routes);
