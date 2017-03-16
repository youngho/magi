import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {MesTrackInOutComponent} from "./mesTrackInOut.component";

export const moduleRoutes: Routes = [{
    path: '',
    component: MesTrackInOutComponent
}];

export const MesTrackInOutRouting = RouterModule.forChild(moduleRoutes);

