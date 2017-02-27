package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-02-27.
 */
public class ProgramHeader {
    private String tester        = ""; // TESTER 번호(Host id)
    private String system        = ""; // TESTER MODEL NAME
    private String handler       = ""; // HANDLER MODEL NAME
    private String head          = ""; // HEAD NUMBER A or B
    private String lotId         = ""; // LOT ID
    private String processCode   = ""; // PROCESS CODE
    private String partNumber    = ""; // PART NUMBER
    private String programName   = ""; // MAIN PROGRAM NAME
    private String grade         = ""; // HQ:HIGH QUALITY
    private String fab           = ""; // FAB SITE
    private String fwName        = ""; // FIREWARE NAME
    private String fwVersion     = ""; // FIRMWARE VERSION
    private String temp          = ""; // TEMP
    private String operatorId    = ""; // OPERATOR ID
    private int quantity         = 0;  // QUANTITY
    private String functionKey   = ""; // FUNCTION KEY
    private int testCounter      = 0;  // TEST 횟수 (0 or 1 or 2.....)
    private String testInput     = ""; // TEST INPUT 방식 (AUTO or MANUAL)
    private String testFlow      = ""; // TEST FLOW (RETEST or FINAL OR CANCEL)
    private String testMode      = ""; // TEST_IN_MANUAL에서 선택한 MODE
    private String boardId       = ""; // TEST BOARD ID (FIX)
    private String prelotEndTime = ""; // 이전 LOT 끝난 시간.
    private String lotInTime     = ""; // OPERATOR ID 입력 시점
    private String betsInTime    = ""; // LC가 BETS한테 LOT 정보 주는 시점.
    private String betsEndTime   = ""; // LC가 BETS로 부터 LOT 정보를 받는 시점.(PROGREAM,LOT 정보)
    private String lotInEndTime  = ""; // TEST PROGRAM UPLOAD 시점.
    private String lotStartTime  = ""; // SRQKIND#02 START 시점.
    private String endTime       = ""; // SRQKIND#08.
    private String binInTime     = ""; // 작업자가 BIN 입력 시작 시점.(BIN POPUP창 활성화 시점)   --->FINAL_END일경우만 표시,--->RE_TEST 경우는 0
    private String binEndTime    = ""; // 작업자가 BIN 입력 완료 시점.(TEST OUT Buttom Push 시점) --->FINAL_END일경우만 표시,--->RE_TEST 경우는 0
    private String sblInTime     = ""; // BETS 서버로 DATA 전송한 시점.
    private String sblEndTime    = ""; // BETS 서버로 부터 이상 유무의 명령을 받은 시점.
    private String finalEndTime  = ""; // 현재 LOT에 대한 LC의 완료시점에서 LC의 모든 DATA가 RESET된 시점을 뺀값.
    private String sblResult     = ""; // OPBIN_ERROR or OK or ........


    public String getTester() {
        return tester;
    }

    public void setTester(String tester) {
        this.tester = tester;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public String getHandler() {
        return handler;
    }

    public void setHandler(String handler) {
        this.handler = handler;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
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

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getFab() {
        return fab;
    }

    public void setFab(String fab) {
        this.fab = fab;
    }

    public String getFwName() {
        return fwName;
    }

    public void setFwName(String fwName) {
        this.fwName = fwName;
    }

    public String getFwVersion() {
        return fwVersion;
    }

    public void setFwVersion(String fwVersion) {
        this.fwVersion = fwVersion;
    }

    public String getTemp() {
        return temp;
    }

    public void setTemp(String temp) {
        this.temp = temp;
    }

    public String getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(String operatorId) {
        this.operatorId = operatorId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getFunctionKey() {
        return functionKey;
    }

    public void setFunctionKey(String functionKey) {
        this.functionKey = functionKey;
    }

    public int getTestCounter() {
        return testCounter;
    }

    public void setTestCounter(int testCounter) {
        this.testCounter = testCounter;
    }

    public String getTestInput() {
        return testInput;
    }

    public void setTestInput(String testInput) {
        this.testInput = testInput;
    }

    public String getTestFlow() {
        return testFlow;
    }

    public void setTestFlow(String testFlow) {
        this.testFlow = testFlow;
    }

    public String getTestMode() {
        return testMode;
    }

    public void setTestMode(String testMode) {
        this.testMode = testMode;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getPrelotEndTime() {
        return prelotEndTime;
    }

    public void setPrelotEndTime(String prelotEndTime) {
        this.prelotEndTime = prelotEndTime;
    }

    public String getLotInTime() {
        return lotInTime;
    }

    public void setLotInTime(String lotInTime) {
        this.lotInTime = lotInTime;
    }

    public String getBetsInTime() {
        return betsInTime;
    }

    public void setBetsInTime(String betsInTime) {
        this.betsInTime = betsInTime;
    }

    public String getBetsEndTime() {
        return betsEndTime;
    }

    public void setBetsEndTime(String betsEndTime) {
        this.betsEndTime = betsEndTime;
    }

    public String getLotInEndTime() {
        return lotInEndTime;
    }

    public void setLotInEndTime(String lotInEndTime) {
        this.lotInEndTime = lotInEndTime;
    }

    public String getLotStartTime() {
        return lotStartTime;
    }

    public void setLotStartTime(String lotStartTime) {
        this.lotStartTime = lotStartTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getBinInTime() {
        return binInTime;
    }

    public void setBinInTime(String binInTime) {
        this.binInTime = binInTime;
    }

    public String getBinEndTime() {
        return binEndTime;
    }

    public void setBinEndTime(String binEndTime) {
        this.binEndTime = binEndTime;
    }

    public String getSblInTime() {
        return sblInTime;
    }

    public void setSblInTime(String sblInTime) {
        this.sblInTime = sblInTime;
    }

    public String getSblEndTime() {
        return sblEndTime;
    }

    public void setSblEndTime(String sblEndTime) {
        this.sblEndTime = sblEndTime;
    }

    public String getFinalEndTime() {
        return finalEndTime;
    }

    public void setFinalEndTime(String finalEndTime) {
        this.finalEndTime = finalEndTime;
    }

    public String getSblResult() {
        return sblResult;
    }

    public void setSblResult(String sblResult) {
        this.sblResult = sblResult;
    }
}
