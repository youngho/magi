import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {ProgramRevisionComponent} from "./testProgramRevision.component";
/**
 * 1. File name     : testProgramRevision.component.ts
 * 2. Discription   : RTest프로그램을 저장 할 경우 업데이트 되지 않고 모두 Insert 동작이 일어나는데 등록 조회 화면에선 최근 데이터 1건만 보여진다. 이 히스토리 화면에선 모든 데이터가 보여진다.
 * 3. writer        : yhkim     2017.02.17
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: ProgramRevisionComponent
}];

export const ProgramRevisionRouting = RouterModule.forChild(moduleRoutes);

