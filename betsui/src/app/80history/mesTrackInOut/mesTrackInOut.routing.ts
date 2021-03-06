import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {MesTrackInOutComponent} from "./mesTrackInOut.component";

/**
 * 1. File name     : mesTrackInOut.routing.ts
 * 2. Discription   : Process 로직에서 MES와 통신한 이력을 보여주는 화면이다.
 * 3. writer        : yhkim     2017.02.17
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0802 : Mes Track In Out
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: MesTrackInOutComponent
}];

export const MesTrackInOutRouting = RouterModule.forChild(moduleRoutes);

