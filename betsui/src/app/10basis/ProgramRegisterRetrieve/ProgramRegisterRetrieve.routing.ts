
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {ProgramRegisterRetrieveComponent} from "./ProgramRegisterRetrieve.component";

export const mouduleRoutes: Routes = [{
  path: '',
  component: ProgramRegisterRetrieveComponent
}];

export const ProgramRegisterRetrieveRouting = RouterModule.forChild(mouduleRoutes);

