/**
 * 1. File name     : compodut.model.ts
 * 2. Discription   : BETS-UI-0302
 *                    Composite DUT Map
 *                    CASI_BIN 테이블의 DUT_MAIN_BIN 에 들어 있는 DUT의 정보를 BIN별로 분류하여 PASS BIN의 비율을 보여준다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export class CompoDut {
    endTimeStart: string;
    endTimeEnd: string;

    partNumber: string;
    processCode: string;
    testerModel: string;
    testerNumber: string;
    head: string;
    testCounter: string;
    lotId: string;
    mainProgramName: string;
    boardId: string;
    sblDutLimit: number;

    // handlerModel: string;
    // grade: string;
    // fab: string;
    // firmwareName: string;
    // firmwareVersion: string;
    // temperature: string;
    // operatorId: string;
    // quantity: string;
    // reworkFlag: string;
    // lotInTime: string;
    // endTime: string;
    // sblResult: string;
    // sblYieldLimit: string;
    // sblBin9Counter: string;
}