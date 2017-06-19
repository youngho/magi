import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {BoardSerialMapComponent} from "./boardSerialMap.component";
/**
 * 1. File name     : boardSerialMap.routing.ts
 * 2. Discription   : Board Serial Map
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0502 : Board Serial Map
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: BoardSerialMapComponent
}];

export const BoardSerialMapRouting = RouterModule.forChild(moduleRoutes);

