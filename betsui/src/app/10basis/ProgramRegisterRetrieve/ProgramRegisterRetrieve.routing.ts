import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {ProgramRegisterRetrieveComponent} from "./ProgramRegisterRetrieve.component";
/**
 * 1. File name     : ProgramRegisterRetrieve.routing.ts
 * 2. Discription   : 기본 테스트 프로그램 정보를 조회 수정한다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const mouduleRoutes: Routes = [{
  path: '',
  component: ProgramRegisterRetrieveComponent
}];

export const ProgramRegisterRetrieveRouting = RouterModule.forChild(mouduleRoutes);

