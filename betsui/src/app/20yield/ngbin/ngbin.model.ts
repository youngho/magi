/**
 * BETS-UI-0202 : NG bin
 * NG_BIN 테이블의 TESTER_COUNTER의 숫자가 0,1,2,OP_BIN(9999) 로들어온다.(분류조건)
 * NG_BIN 테이블에 있는 NG_BIN(SUB_BIN)(1~999)의 값의 각 NG_BIN숫자별로 몇개씩 나왔는지 보여준다.
 */
export class NgBin {
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