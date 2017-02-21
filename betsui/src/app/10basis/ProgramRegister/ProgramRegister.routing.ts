import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";
import {ProgramRegisterComponent} from "./ProgramRegister.component";

export const ProgramRegisterRoutes: Routes = [{
  path: '',
  component: ProgramRegisterComponent
}];

export const ProgramRegisterRouting = RouterModule.forChild(ProgramRegisterRoutes);

