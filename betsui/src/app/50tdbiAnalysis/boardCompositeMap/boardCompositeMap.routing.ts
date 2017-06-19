import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {BoardCompositeMapComponent} from "./boardCompositeMap.component";

/**
 * 1. File name     : boardCompositeMap.routing.ts
 * 2. Discription   : Board Composite Map
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0503 : Board Composite Map
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: BoardCompositeMapComponent
}];

export const BoardCompositeMapRouting = RouterModule.forChild(moduleRoutes);

