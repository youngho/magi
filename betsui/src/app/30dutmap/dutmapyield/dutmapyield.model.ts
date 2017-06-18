/**
 * 1. File name     : dutmapyield.model.ts
 * 2. Discription   : BETS-UI-0303
 *                    DUT Map Yiled
 *                    BIN Selection 이 정해지지 않을 경우에는 PASS BIN의 비율을 보여준다
 *                    BIN Selection 에서 선택한 BIN의 비율을 보여준다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export class DutMapYield {
    endTimeStart: string;
    endTimeEnd: string;
    binSelection: string;
    binYieldLowerLimit: string;
    binYieldUpperLimit: string;

    partNumber: string;
    processCode: string;
    testerModel: string;
    testerNumber: string;
    head: string;
    testCounter: string;
    lotId: string;
    mainProgramName: string;
    boardId: string;

    // sblDutLimit: number;
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