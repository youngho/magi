
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {BinDescriptionComponent} from "./BinDescription.component";

export const mouduleRoutes: Routes = [{
  path: '',
  component: BinDescriptionComponent
}];

export const BinDescriptionRouting = RouterModule.forChild(mouduleRoutes);

