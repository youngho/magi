package kr.famos.bets.sblAnalysis.yieldAbnormal.dto;

/**
 * Created by yhkim on 2017-03-13.
 */
public class YieldAbnormalResultDto {
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
    private String sblFirmwareResult = "";
    private String mainProgramName  = ""; // MAIN PROGRAM NAME

    private String opInput = "";
    private String opYield = "";
    private String opPass = "";
    private String opBin1 = "";
    private String opBin2 = "";
    private String opBin3 = "";
    private String opBin4 = "";
    private String opBin5 = "";
    private String opBin6 = "";
    private String opBin7 = "";
    private String opBin8 = "";
    private String opBin9 = "";

    private String hInput = "";
    private String hYield = "";
    private String hPass = "";
    private String hBin1 = "";
    private String hBin2 = "";
    private String hBin3 = "";
    private String hBin4 = "";
    private String hBin5 = "";
    private String hBin6 = "";
    private String hBin7 = "";
    private String hBin8 = "";
    private String hBin9 = "";

    private String tInput = "";
    private String tYield = "";
    private String tPass = "";
    private String tBin1 = "";
    private String tBin2 = "";
    private String tBin3 = "";
    private String tBin4 = "";
    private String tBin5 = "";
    private String tBin6 = "";
    private String tBin7 = "";
    private String tBin8 = "";
    private String tBin9 = "";

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

    public String getOpInput() {
        return opInput;
    }

    public void setOpInput(String opInput) {
        this.opInput = opInput;
    }

    public String getOpYield() {
        return opYield;
    }

    public void setOpYield(String opYield) {
        this.opYield = opYield;
    }

    public String getOpPass() {
        return opPass;
    }

    public void setOpPass(String opPass) {
        this.opPass = opPass;
    }

    public String getOpBin1() {
        return opBin1;
    }

    public void setOpBin1(String opBin1) {
        this.opBin1 = opBin1;
    }

    public String getOpBin2() {
        return opBin2;
    }

    public void setOpBin2(String opBin2) {
        this.opBin2 = opBin2;
    }

    public String getOpBin3() {
        return opBin3;
    }

    public void setOpBin3(String opBin3) {
        this.opBin3 = opBin3;
    }

    public String getOpBin4() {
        return opBin4;
    }

    public void setOpBin4(String opBin4) {
        this.opBin4 = opBin4;
    }

    public String getOpBin5() {
        return opBin5;
    }

    public void setOpBin5(String opBin5) {
        this.opBin5 = opBin5;
    }

    public String getOpBin6() {
        return opBin6;
    }

    public void setOpBin6(String opBin6) {
        this.opBin6 = opBin6;
    }

    public String getOpBin7() {
        return opBin7;
    }

    public void setOpBin7(String opBin7) {
        this.opBin7 = opBin7;
    }

    public String getOpBin8() {
        return opBin8;
    }

    public void setOpBin8(String opBin8) {
        this.opBin8 = opBin8;
    }

    public String getOpBin9() {
        return opBin9;
    }

    public void setOpBin9(String opBin9) {
        this.opBin9 = opBin9;
    }

    public String gethInput() {
        return hInput;
    }

    public void sethInput(String hInput) {
        this.hInput = hInput;
    }

    public String gethYield() {
        return hYield;
    }

    public void sethYield(String hYield) {
        this.hYield = hYield;
    }

    public String gethPass() {
        return hPass;
    }

    public void sethPass(String hPass) {
        this.hPass = hPass;
    }

    public String gethBin1() {
        return hBin1;
    }

    public void sethBin1(String hBin1) {
        this.hBin1 = hBin1;
    }

    public String gethBin2() {
        return hBin2;
    }

    public void sethBin2(String hBin2) {
        this.hBin2 = hBin2;
    }

    public String gethBin3() {
        return hBin3;
    }

    public void sethBin3(String hBin3) {
        this.hBin3 = hBin3;
    }

    public String gethBin4() {
        return hBin4;
    }

    public void sethBin4(String hBin4) {
        this.hBin4 = hBin4;
    }

    public String gethBin5() {
        return hBin5;
    }

    public void sethBin5(String hBin5) {
        this.hBin5 = hBin5;
    }

    public String gethBin6() {
        return hBin6;
    }

    public void sethBin6(String hBin6) {
        this.hBin6 = hBin6;
    }

    public String gethBin7() {
        return hBin7;
    }

    public void sethBin7(String hBin7) {
        this.hBin7 = hBin7;
    }

    public String gethBin8() {
        return hBin8;
    }

    public void sethBin8(String hBin8) {
        this.hBin8 = hBin8;
    }

    public String gethBin9() {
        return hBin9;
    }

    public void sethBin9(String hBin9) {
        this.hBin9 = hBin9;
    }

    public String gettInput() {
        return tInput;
    }

    public void settInput(String tInput) {
        this.tInput = tInput;
    }

    public String gettYield() {
        return tYield;
    }

    public void settYield(String tYield) {
        this.tYield = tYield;
    }

    public String gettPass() {
        return tPass;
    }

    public void settPass(String tPass) {
        this.tPass = tPass;
    }

    public String gettBin1() {
        return tBin1;
    }

    public void settBin1(String tBin1) {
        this.tBin1 = tBin1;
    }

    public String gettBin2() {
        return tBin2;
    }

    public void settBin2(String tBin2) {
        this.tBin2 = tBin2;
    }

    public String gettBin3() {
        return tBin3;
    }

    public void settBin3(String tBin3) {
        this.tBin3 = tBin3;
    }

    public String gettBin4() {
        return tBin4;
    }

    public void settBin4(String tBin4) {
        this.tBin4 = tBin4;
    }

    public String gettBin5() {
        return tBin5;
    }

    public void settBin5(String tBin5) {
        this.tBin5 = tBin5;
    }

    public String gettBin6() {
        return tBin6;
    }

    public void settBin6(String tBin6) {
        this.tBin6 = tBin6;
    }

    public String gettBin7() {
        return tBin7;
    }

    public void settBin7(String tBin7) {
        this.tBin7 = tBin7;
    }

    public String gettBin8() {
        return tBin8;
    }

    public void settBin8(String tBin8) {
        this.tBin8 = tBin8;
    }

    public String gettBin9() {
        return tBin9;
    }

    public void settBin9(String tBin9) {
        this.tBin9 = tBin9;
    }

    public String getSblFirmwareResult() {
        return sblFirmwareResult;
    }

    public void setSblFirmwareResult(String sblFirmwareResult) {
        this.sblFirmwareResult = sblFirmwareResult;
    }
}
