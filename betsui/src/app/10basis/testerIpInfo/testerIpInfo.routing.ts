
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {TesterIpInfoComponent} from "./testerIpInfo.component";

export const mouduleRoutes: Routes = [{
  path: '',
  component: TesterIpInfoComponent
}];

export const TesterIpInfoRouting = RouterModule.forChild(mouduleRoutes);

