import {Routes, RouterModule} from "@angular/router";
import {TdbiComponent} from "./tdbi.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: TdbiComponent
}];

export const TdbiRouting = RouterModule.forChild(moduleRoutes);

