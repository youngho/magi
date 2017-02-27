
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {TdbiBoardTypeRegisterComponent} from "./TdbiBoardTypeRegister.component";

export const mouduleRoutes: Routes = [{
  path: '',
  component: TdbiBoardTypeRegisterComponent
}];

export const TdbiBoardTypeRegisterRouting = RouterModule.forChild(mouduleRoutes);

