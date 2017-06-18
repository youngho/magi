/**
 * 1. File name     : testEfficiency.model.ts
 * 2. Discription   : Test Efficiency 조회 기능 각 시간을 산출하는 로직이 중요하다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0601 : Test Efficiency
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export class TestEfficiency {
    searchTimeStart: string;    // LOT 시작일시(PRELOT_END_TIME)가 이 시간보다 큰 값을 조회한다
    searchTimeEnd: string;      // LOT 끝(SBL_END_TIME)가 이 시간보다 작은 값을 조회한다
    testerNumber: string;
}