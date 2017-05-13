/**
 * BETS-UI-0602
 * Test Time
 * mainProgramName 의 변경이력에 대한 CASI_BIN 의 testTime을 보여준다.
 * testTime = shotEndTime - shotStartTime으로 같은 프로그램으로 되어 있는 목록에서 Average, MinTime, MaxTime 의 testTime을 구해서 보여준다.
 */
export class TestTime {
    endTimeStart: string;    // 조회 시작일
    endTimeEnd: string;      // 조회 종료일
    partNumber: string;      // PART NUMBER
    processCode: string;     // PROCESS CODE
    mainProgramName: string; // MAIN PROGRAM NAME
}