
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from "./settings.component";

export const mouduleRoutes: Routes = [{
  path: '',
  component: SettingsComponent
}];

export const SettingsRouting = RouterModule.forChild(mouduleRoutes);

