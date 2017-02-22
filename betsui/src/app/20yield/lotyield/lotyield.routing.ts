
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {lotyieldComponent} from "./lotyield.component";

export const lotyieldRoutes: Routes = [{
  path: '',
  component: lotyieldComponent
}];

export const lotyieldRouting = RouterModule.forChild(lotyieldRoutes);

