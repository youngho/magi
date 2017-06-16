/**
 * 1. File name     : boardCompositeSocketYield.model.ts
 * 2. Discription   : 특정 보드의 기간동안 소켓의 수율을 보여준다
 * 3. writer        : yhkim     2017.06.06
 * 4. modifier      :
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
export class BoardCompositeSocketYield {
    biEndTimeStart: string;
    biEndTimeEnd: string;
    biBoardId: string;
    biPartNumber: string;
    biMainProgramName: string;
    sblBoardLimt: number;   // DB 조회값이 아님. 컬럼에 없는값. 서비스에서 사용하는 값이 아니라서 @RequestBody 에 매치되는 변수가 없다
    biTestNumber: string;

    // biSeq: string;
    // biLotId: string;
    // biProcessCode: string;
    // biOperatorId: string;
    // biStartTime: string;
    // biEndTime: string;
    // biTesterModel: string;
    // biZoneNumber: string;
    // biSlotNumber: string;
    // biBoardRow: string;
    // biBoardColumn: string;
    // biSocketNumber: string;
}