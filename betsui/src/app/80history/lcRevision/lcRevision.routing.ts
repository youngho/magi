import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {LcRevisionComponent} from "./lcRevision.component";
/**
 * 1. File name     : lcRevision.model.ts
 * 2. Discription   : LC 이력을 조회하는 화면이다. 사실상 LC관련 입력 업무가 없기 때문에 사용하지 않는 화면이다.
 * 3. writer        : yhkim     2017.02.17
 * 4. modifier      :
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: LcRevisionComponent
}];

export const LcRevisionRouting = RouterModule.forChild(moduleRoutes);

