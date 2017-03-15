import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: DashboardComponent
}];

export const DashboardRouting = RouterModule.forChild(moduleRoutes);

