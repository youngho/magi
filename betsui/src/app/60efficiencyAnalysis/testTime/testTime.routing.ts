import {Routes, RouterModule} from "@angular/router";
import {TestTimeComponent} from "./testTime.component";

/**
 * BETS-UI-0602
 * Test Time
 * mainProgramName 의 변경이력에 대한 CASI_BIN 의 testTime을 보여준다.
 * testTime = shotEndTime - shotStartTime으로 같은 프로그램으로 되어 있는 목록에서 Average, MinTime, MaxTime 의 testTime을 구해서 보여준다.
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: TestTimeComponent
}];

export const TestTimeRouting = RouterModule.forChild(moduleRoutes);

