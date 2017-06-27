package kr.famos.bets.sblAnalysis.yieldAbnormal.dto;

/**
 * BETS-UI-""4""1 : Yield abnormal
 *
 * 2""17-""5-29
 * Yield abnormal - 1Lot 4개 Line으로 출력 (Test 결과, Handler 결과, Operator 결과, SBL 결과) (UI)
 * 강래완 책임의 요구사함으로 각 BIN 데이터를 줄바꿈하여 보여주도록 변경함
 */
public class YieldAbnormalResultDto {
    private String partNumber        = ""; // PART NUMBER
    private String operatorId        = ""; // OPERATOR ID
    private String lotId             = ""; // LOT ID
    private String lotInTime         = ""; // OPERATOR ID 입력 시점
    private String endTime           = ""; // SRQKIND #""8 또는 SRQKIND#1"" 시점.
    private String processCode       = ""; // PROCESS CODE
    private String testerModel       = ""; // TESTER MODEL NAME
    private String testerNumber      = ""; // TESTER 번호(Host id)
    private String head              = ""; // HEAD NUMBER A or B
    private String boardId           = ""; // TEST BOARD ID (FIX)
    private String sblFirmwareResult = "";
    private String mainProgramName   = ""; // MAIN PROGRAM NAME
    private String sblCID            = ""; // CID_ERROR_DATA 과 JOIN 하여 나오는 결과 값
    private String sblResult         = ""; // SBL_YIELD_RESULT,SBL_BIN1_RESULT,SBL_BIN2_RESULT………..SBL_BIN9_RESULT 가 아닌것 즉 SBL ERROR가 없는것은 PASS로

    private String binType = "";
    private String input = "";
    private String pass  = "";
    private String yield = "";
    private String bin1 = "";
    private String bin2 = "";
    private String bin3 = "";
    private String bin4 = "";
    private String bin5 = "";
    private String bin6 = "";
    private String bin7 = "";
    private String bin8 = "";
    private String bin9 = "";

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(String operatorId) {
        this.operatorId = operatorId;
    }

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
    }

    public String getLotInTime() {
        return lotInTime;
    }

    public void setLotInTime(String lotInTime) {
        this.lotInTime = lotInTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getSblFirmwareResult() {
        return sblFirmwareResult;
    }

    public void setSblFirmwareResult(String sblFirmwareResult) {
        this.sblFirmwareResult = sblFirmwareResult;
    }

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public String getSblCID() {
        return sblCID;
    }

    public void setSblCID(String sblCID) {
        this.sblCID = sblCID;
    }

    public String getSblResult() {
        return sblResult;
    }

    public void setSblResult(String sblResult) {
        this.sblResult = sblResult;
    }

    public String getBinType() {
        return binType;
    }

    public void setBinType(String binType) {
        this.binType = binType;
    }

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getYield() {
        return yield;
    }

    public void setYield(String yield) {
        this.yield = yield;
    }

    public String getBin1() {
        return bin1;
    }

    public void setBin1(String bin1) {
        this.bin1 = bin1;
    }

    public String getBin2() {
        return bin2;
    }

    public void setBin2(String bin2) {
        this.bin2 = bin2;
    }

    public String getBin3() {
        return bin3;
    }

    public void setBin3(String bin3) {
        this.bin3 = bin3;
    }

    public String getBin4() {
        return bin4;
    }

    public void setBin4(String bin4) {
        this.bin4 = bin4;
    }

    public String getBin5() {
        return bin5;
    }

    public void setBin5(String bin5) {
        this.bin5 = bin5;
    }

    public String getBin6() {
        return bin6;
    }

    public void setBin6(String bin6) {
        this.bin6 = bin6;
    }

    public String getBin7() {
        return bin7;
    }

    public void setBin7(String bin7) {
        this.bin7 = bin7;
    }

    public String getBin8() {
        return bin8;
    }

    public void setBin8(String bin8) {
        this.bin8 = bin8;
    }

    public String getBin9() {
        return bin9;
    }

    public void setBin9(String bin9) {
        this.bin9 = bin9;
    }
}