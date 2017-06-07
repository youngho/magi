/**
 * 1. File name     : singledut.component.ts
 * 2. Discription   : CASI_BIN 테이블에서 SHOT 별로 DUT의 결과를 보여준다
 *                    DUT_MAIN_BIN 컬럼에 들어 있는 BIN 문자열을 파싱하여 표(DUT Map) 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0301 : Single DUT map
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export class SingleDut {
    endTimeStart: string;
    endTimeEnd: string;
    binSelection: string;

    partNumber: string;
    processCode: string;
    testerModel: string;

    testerNumber: string;
    head: string;
    testCounter: string;

    lotId: string;
    mainProgramName: string;
    boardId: string;
/*
    handlerModel: string;
    grade: string;
    fab: string;
    firmwareName: string;
    firmwareVersion: string;
    temperature: string;
    operatorId: string;
    quantity: string;
    reworkFlag: string;
    lotInTime: string;
    endTime: string;
    sblResult: string;
    sblYieldLimit: string;
    sblBin9Counter: string;
    sblBin9Limit: string;
*/
}