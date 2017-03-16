import {Routes, RouterModule} from "@angular/router";
import {TestTimeComponent} from "./testTime.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: TestTimeComponent
}];

export const TestTimeRouting = RouterModule.forChild(moduleRoutes);

