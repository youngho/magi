import {Routes, RouterModule} from "@angular/router";
import {LcVersionRegisterComponent} from "./lcVersionRegister.component";

export const LcVersionRegisterRoutes: Routes = [{
    path: '',
    component: LcVersionRegisterComponent
}];

export const LcVersionRegisterRouting = RouterModule.forChild(LcVersionRegisterRoutes);

