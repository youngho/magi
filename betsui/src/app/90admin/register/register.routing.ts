import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";

export const mouduleRoutes: Routes = [{
    path: '',
    component: RegisterComponent
}];

export const RegisterRouting = RouterModule.forChild(mouduleRoutes);

