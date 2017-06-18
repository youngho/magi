/**
 * 1. File name     : lotyield.model.ts
 * 2. Discription   : LOT YIELD SUMMARY(COMPOSITE) - BETS-UI-0201
 *                    특정기간 모든 LOTS, OP_BIN, YIELD, SUMMARY
 *                    MAIN_BIN 테이블의 TESTER_COUNTER 컬럼의 숫자가 0,1,2,OP_BIN(9999)로 들어온다.(분류조건)
 *                    MAIN_BIN 테이블에 있는 OP_BIN 컬럼 값에 BIN1 ~ BIN9가 들어있다.(콤마로 구분되어 있음)
 *                    각 BIN의 값을 보여주고 전체합, 패스빈값들의 합, YIELD를 보여준다.
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export class Lotyield {
    endTimeStart: string;
    endTimeEnd: string;
    // binSelection : string;

    partNumber: string;
    processCode: string;
    testerModel: string;

    testerNumber: string;
    head: string;
    testCounter: string;

    lotId: string;
    mainProgramName: string;
    boardId: string;
}