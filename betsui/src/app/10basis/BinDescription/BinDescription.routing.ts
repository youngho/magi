import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {BinDescriptionComponent} from "./BinDescription.component";
/**
 * 1. File name     : BinDescription.routing.ts
 * 2. Discription   : BIN 에 대한 설명을 관리한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const mouduleRoutes: Routes = [{
  path: '',
  component: BinDescriptionComponent
}];

export const BinDescriptionRouting = RouterModule.forChild(mouduleRoutes);

