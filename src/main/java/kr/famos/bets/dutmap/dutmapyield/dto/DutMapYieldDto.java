package kr.famos.bets.dutmap.dutmapyield.dto;

/**
 * BETS-UI-0303
 * DUT Map Yiled
 * BIN Selection 이 정해지지 않을 경우에는 PASS BIN의 비율을 보여준다
 * BIN Selection 에서 선택한 BIN의 비율을 보여준다
 */
public class DutMapYieldDto {
    private String partNumber        = ""; // PART NUMBER
    private String lotId             = ""; // LOT ID
    private String processCode       = ""; // PROCESS CODE
    private String boardId           = ""; // TEST BOARD ID (FIX)
    private String testerNumber      = ""; // TESTER 번호(Host id)
    private String head              = ""; // HEAD NUMBER A or B
    private String mainProgramName   = ""; // MAIN PROGRAM NAME
    private String operatorId        = ""; // OPERATOR ID
    private String testerModel       = ""; // TESTER MODEL NAME
    private String testCounter       = ""; // TEST 횟수 (0 or 1 or 2.....)
    private String handlerModel      = ""; // HANDLER MODEL NAME
    private String dutMainBin        = ""; // 보드의 DUT별 MAIN BIN 갯수가 '1 ~ 보드의 DUT수' 만큼 콤마로 구분되어 들어 있다

    private String endTimeStart      = ""; // 조회 시작일
    private String endTimeEnd        = ""; // 조회 종료일
    private String binSelection      = ""; // 특정 BIN에 대한 비율을 보기위한 조회 조건
    private String binYieldLimit     = ""; // BIN Selection 의 조회 제한 값

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
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

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
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

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public String getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(String operatorId) {
        this.operatorId = operatorId;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
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

    public String getBinSelection() {
        return binSelection;
    }

    public void setBinSelection(String binSelection) {
        this.binSelection = binSelection;
    }

    public String getBinYieldLimit() {
        return binYieldLimit;
    }

    public void setBinYieldLimit(String binYieldLimit) {
        this.binYieldLimit = binYieldLimit;
    }
}
