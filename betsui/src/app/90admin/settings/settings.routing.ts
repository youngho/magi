import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from "./settings.component";

/**
 * 1. File name     : settings.routing.ts
 * 2. Discription   : 사용자 설정화면
 * 3. writer        : yhkim     2017.06.18
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0902 : Setting
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const mouduleRoutes: Routes = [{
  path: '',
  component: SettingsComponent
}];

export const SettingsRouting = RouterModule.forChild(mouduleRoutes);

