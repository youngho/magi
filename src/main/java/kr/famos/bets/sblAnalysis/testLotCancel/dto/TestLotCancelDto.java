package kr.famos.bets.sblAnalysis.testLotCancel.dto;

/**
 * Created by yhkim on 2017-03-13.
 */
public class TestLotCancelDto {
    private int casiSeq              = 0;  //
    private String partNumber        = ""; // PART NUMBER
    private String operatorId        = ""; // OPERATOR ID
    private String lotId             = ""; // LOT ID


    private String processCode       = ""; // PROCESS CODE
    private String testerModel       = ""; // TESTER MODEL NAME
    private String testerNumber      = ""; // TESTER 번호(Host id)
    private String head              = ""; // HEAD NUMBER A or B
    private String testCounter       = ""; // TEST 횟수 (0 or 1 or 2.....)
    private String handlerModel      = ""; // HANDLER MODEL NAME
    private String boardId           = ""; // TEST BOARD ID (FIX)
    private String mainProgramName   = ""; // MAIN PROGRAM NAME
    private String testTime          = ""; // PGM_END_TIME에서 PGM_START_TIME을 뺀 값.
    private String indexTime         = ""; // 바로 앞전 PGM_END_TIME에서  PGM_START_TIME을 뺀 값.

    private String dutMainBin        = ""; //
    private String endTimeStart = "";
    private String endTimeEnd = "";

    public int getCasiSeq() {
        return casiSeq;
    }

    public void setCasiSeq(int casiSeq) {
        this.casiSeq = casiSeq;
    }

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

    public String getTestCounter() {
        return testCounter;
    }

    public void setTestCounter(String testCounter) {
        this.testCounter = testCounter;
    }

    public String getHandlerModel() {
        return handlerModel;
    }

    public void setHandlerModel(String handlerModel) {
        this.handlerModel = handlerModel;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public String getTestTime() {
        return testTime;
    }

    public void setTestTime(String testTime) {
        this.testTime = testTime;
    }

    public String getIndexTime() {
        return indexTime;
    }

    public void setIndexTime(String indexTime) {
        this.indexTime = indexTime;
    }

    public String getDutMainBin() {
        return dutMainBin;
    }

    public void setDutMainBin(String dutMainBin) {
        this.dutMainBin = dutMainBin;
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
}
