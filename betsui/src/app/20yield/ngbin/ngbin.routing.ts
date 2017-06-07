import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';
import {NgBinComponent} from "./ngbin.component";
/**
 * BETS-UI-0202 : NG bin
 * NG_BIN 테이블의 TESTER_COUNTER의 숫자가 0,1,2,OP_BIN(9999) 로들어온다.(분류조건)
 * NG_BIN 테이블에 있는 NG_BIN(SUB_BIN)(1~999)의 값의 각 NG_BIN숫자별로 몇개씩 나왔는지 보여준다.
 */
export const moduleRoutes: Routes = [{
    path: '',
    component: NgBinComponent
}];

export const NgBinRouting = RouterModule.forChild(moduleRoutes);

