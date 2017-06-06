import {Routes, RouterModule} from "@angular/router";
import {BadBlockComponent} from "./badBlock.component";

export const routes: Routes = [{
    path: '',
    component: BadBlockComponent
}];

export const BadBlockRouting = RouterModule.forChild(routes);

