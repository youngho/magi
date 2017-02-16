
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {LastTableComponent} from "./lasttable.component";

export const lastTableRoutes: Routes = [{
  path: '',
  component: LastTableComponent
}];

export const lastTableRouting = RouterModule.forChild(lastTableRoutes);

