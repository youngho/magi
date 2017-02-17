
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {retrieveLastTableComponent} from "./retrievelasttable.component";

export const retrievelastTableRoutes: Routes = [{
  path: '',
  component: retrieveLastTableComponent
}];

export const retrievelastTableRouting = RouterModule.forChild(retrievelastTableRoutes);

