/**
 * 1. File name     : chipId.model.ts
 * 2. Discription   : CID 중복 목록을 조회한다
 * 3. writer        : yhkim     2017.06.10
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0804 : CID Duplicate Retrieve
 */
/**
 * version 1.0 : 2017.06.10  /  yhkim  / First Frame Creation
 */
export class ChipId {
    // fastTesterNumber: String;    // 이전 TESTER 번호(Host id)
    // fastTesterModel: String;     // 이전 TESTER MODEL NAME
    fastLotId: String;           // 이전 LOT ID
    // fastProcessCode: String;     // 이전 BETS에서 내려주는 기준정보 PROCESS CODE
    // fastPartNumber: String;      // 이전 BETS에서 내려주는 기준정보 PART NUMBER
    // fastMainProgramName: String; // 이전BETS에서 내려주는 기준정보 MAIN PROGRAM NAME
    // fastFirmwareName: String; // 이전 BETS에서 내려주는 기준정보 FIREWARE NAME
    // fastFirmwareVersion: String; // 이전 BETS에서 내려주는 기준정보 FIRMWARE VERSION
    // fastFileCreateTime: String; // 이전 CID 생성 날자
    // fastDutNo: number;            // 이전 DUT NO
    fastCid: String; // 이전 CID_NUMBER
    // testerNumber: String; // TESTER 번호(Host id)
    // testerModel: String; // TESTER MODEL NAME
    lotId: String; // LOT ID
    // processCode: String; // BETS에서 내려주는 기준정보 PROCESS CODE
    // partNumber: String; // BETS에서 내려주는 기준정보 PART NUMBER
    // mainProgramName: String; // BETS에서 내려주는 기준정보 MAIN PROGRAM NAME
    // firmwareName: String; // BETS에서 내려주는 기준정보 FIREWARE NAME
    // firmwareVersion: String; // BETS에서 내려주는 기준정보 FIRMWARE VERSION
    // fileCreateTime: String; // CID 생성 날자
    // dutNo: number;  // DUT NO
    cid: String; // CID_NUMBER

    fileCreateTimeStart:String;
    fileCreateTimeEnd:String;
}