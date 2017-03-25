
import { Routes, RouterModule } from '@angular/router';
import {ProgramRegisterRetrieveComponent} from "./ProgramRegisterRetrieve.component";
import {TestComponent} from "./test.component";

export const mouduleRoutes: Routes = [{
  path: '',
  component: TestComponent
}];

export const TestRouting = RouterModule.forChild(mouduleRoutes);

