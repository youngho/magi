package kr.famos.bets.sblAnalysis.yieldAbnormal.dto;

/**
 * Created by yhkim on 2017-03-13.
 */
public class YieldAbnormalDto {
    private String partNumber       = ""; // PART NUMBER
    private String operatorId       = ""; // OPERATOR ID
    private String lotId            = ""; // LOT ID
    private String lotInTime        = ""; // OPERATOR ID 입력 시점
    private String endTime          = ""; // SRQKIND #08 또는 SRQKIND#10 시점.
    private String processCode      = ""; // PROCESS CODE
    private String testerModel      = ""; // TESTER MODEL NAME
    private String testerNumber     = ""; // TESTER 번호(Host id)
    private String head             = ""; // HEAD NUMBER A or B
    private String boardId           = ""; // TEST BOARD ID (FIX)
    private String sblResult        = ""; // SBL_YIELD_RESULT,SBL_BIN1_RESULT,SBL_BIN2_RESULT………..SBL_BIN9_RESULT 가 아닌것 즉 SBL ERROR가 없는것은 PASS로
    private String sblYieldResult   = ""; // SBL_YIELD_LIMIT 기준 이하일 경우 "ERROR"
    private String sblBin1Result    = ""; // HANDLER_BIN BIN1대비 OPERATOR_BIN BIN1 수량이 많을 경우 "ERROR"
    private String sblBin2Result    = ""; // HANDLER_BIN BIN2대비 OPERATOR_BIN BIN2 수량이 많을 경우 "ERROR"
    private String sblBin3Result    = ""; // HANDLER_BIN BIN3대비 OPERATOR_BIN BIN3 수량이 많을 경우 "ERROR"
    private String sblBin4Result    = ""; // HANDLER_BIN BIN4대비 OPERATOR_BIN BIN4 수량이 많을 경우 "ERROR"
    private String sblBin5Result    = ""; // NOT USE
    private String sblBin6Result    = ""; // NOT USE
    private String sblBin7Result    = ""; // NOT USE
    private String sblBin8Result    = ""; // SBL_BIN8_LIMIT 기준 이상일 경우 "ERROR"
    private String sblBin9Result    = ""; // SBL_BIN9_COUNTER 기준 이상일 경우 "ERROR"
    private String mainProgramName  = ""; // MAIN PROGRAM NAME

    private String endTimeStart = "";
    private String endTimeEnd = "";
    private String input = "";
    private String yield = "";
    private String pass = "";
    private String bin1 = "";
    private String bin2 = "";
    private String bin3 = "";
    private String bin4 = "";
    private String bin5 = "";
    private String bin6 = "";
    private String bin7 = "";
    private String bin8 = "";
    private String bin9 = "";

    private String sblMode = "";

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

    public String getSblResult() {
        return sblResult;
    }

    public void setSblResult(String sblResult) {
        this.sblResult = sblResult;
    }

    public String getSblYieldResult() {
        return sblYieldResult;
    }

    public void setSblYieldResult(String sblYieldResult) {
        this.sblYieldResult = sblYieldResult;
    }

    public String getSblBin1Result() {
        return sblBin1Result;
    }

    public void setSblBin1Result(String sblBin1Result) {
        this.sblBin1Result = sblBin1Result;
    }

    public String getSblBin2Result() {
        return sblBin2Result;
    }

    public void setSblBin2Result(String sblBin2Result) {
        this.sblBin2Result = sblBin2Result;
    }

    public String getSblBin3Result() {
        return sblBin3Result;
    }

    public void setSblBin3Result(String sblBin3Result) {
        this.sblBin3Result = sblBin3Result;
    }

    public String getSblBin4Result() {
        return sblBin4Result;
    }

    public void setSblBin4Result(String sblBin4Result) {
        this.sblBin4Result = sblBin4Result;
    }

    public String getSblBin5Result() {
        return sblBin5Result;
    }

    public void setSblBin5Result(String sblBin5Result) {
        this.sblBin5Result = sblBin5Result;
    }

    public String getSblBin6Result() {
        return sblBin6Result;
    }

    public void setSblBin6Result(String sblBin6Result) {
        this.sblBin6Result = sblBin6Result;
    }

    public String getSblBin7Result() {
        return sblBin7Result;
    }

    public void setSblBin7Result(String sblBin7Result) {
        this.sblBin7Result = sblBin7Result;
    }

    public String getSblBin8Result() {
        return sblBin8Result;
    }

    public void setSblBin8Result(String sblBin8Result) {
        this.sblBin8Result = sblBin8Result;
    }

    public String getSblBin9Result() {
        return sblBin9Result;
    }

    public void setSblBin9Result(String sblBin9Result) {
        this.sblBin9Result = sblBin9Result;
    }

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public String getEndTimeStart() {
        return endTimeStart;
    }

    public void setEndTimeStart(String endTimeStart) {
        this.endTimeStart = endTimeStart;
    }

    public String getEndTimeEnd() {
        return endTimeEnd;
    }

    public void setEndTimeEnd(String endTimeEnd) {
        this.endTimeEnd = endTimeEnd;
    }

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }

    public String getYield() {
        return yield;
    }

    public void setYield(String yield) {
        this.yield = yield;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
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

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getSblMode() {
        return sblMode;
    }

    public void setSblMode(String sblMode) {
        this.sblMode = sblMode;
    }
}
