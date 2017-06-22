package kr.famos.bets.yieldAnalysis.ngbin.dto;

/**
 * Created by yhkim on 2017-03-08.
 */
public class NgBinCondDto {
    private String endTimeStart      = "";
    private String endTimeEnd        = "";
    private String binSelection      = "";
    private String partNumber        = ""; // PART NUMBER
    private String processCode       = ""; // PROCESS CODE
    private String testerModel       = ""; // TESTER MODEL NAME
    private String testerNumber      = ""; // TESTER 번호(Host id)
    private String head              = ""; // HEAD NUMBER A or B
    private String testCounter       = ""; // TEST 횟수 (0 or 1 or 2.....)
    private String lotId             = ""; // LOT ID
    private String mainProgramName   = ""; // MAIN PROGRAM NAME
    private String boardId           = ""; // TEST BOARD ID (FIX)

//    private String handlerModel      = ""; // HANDLER MODEL NAME
//    private String grade             = ""; // HQ:HIGH QUALITY
//    private String fab               = ""; // FAB SITE
//    private String firmwareName      = ""; // FIREWARE NAME
//    private String firmwareVersion   = ""; // FIRMWARE VERSION
//    private String temperature       = ""; // TEMPERATURE SPEC
//    private String operatorId        = ""; // OPERATOR ID
//    private String quantity          = ""; // 해당 LOT의 제품 수량
//    private String functionKey       = ""; // FUNCTION KEY(ADVANTEST T5503만 해당됨)
//    private String testInput         = ""; // TEST INPUT LOADING방식 (AUTO or MANUAL)
//    private String testFlow          = ""; // TEST FLOW (RETEST or FINAL OR CANCEL)
//    private String reworkFlag        = ""; // REWORK FLAG
//    private String testMode          = ""; // TEST_IN_MANUAL에서 선택한 MODE
//    private String prelotEndTime     = ""; // 이전 LOT 끝난 시간.
//    private String lotInTime         = ""; // OPERATOR ID 입력 시점
//    private String betsInTime        = ""; // LC가 BETS한테 LOT 정보 주는 시점.
//    private String betsEndTime       = ""; // LC가 BETS로 부터 LOT 정보를 받는 시점.(PROGREAM,LOT 정보)
//    private String lotInEndTime      = ""; // TEST PROGRAM UPLOAD 시점.
//    private String lotStartTime      = ""; // SRQKIND#02 or SRQKIND#04 START 시점.
//    private String endTime           = ""; // SRQKIND#10 시점.
//    private String binInTime         = ""; // 작업자가 BIN 입력 시작 시점.(BIN POPUP창 활성화 시점)   --->FINAL_END일경우만 표시,--->RE_TEST 경우는 0
//    private String binEndTime        = ""; // 작업자가 BIN 입력 완료 시점.(TEST OUT Buttom Push 시점) ---
//    private String sblInTime         = ""; // BETS 서버로 DATA 전송한 시점.
//    private String sblEndTime        = ""; // BETS 서버로 부터 이상 유무의 명령을 받은 시점.
//    private String finalEndTime      = ""; // 현재 LOT에 대한 LC의 완료시점에서 LC의 모든 DATA가 RESET된 시점을 뺀값.
//    private String sblResult         = ""; // OPBIN1_ERROR/OPBIN2_ERROR/OPBIN3_ERROR/OPBIN4_ERROR/OPBIN9_ERROR/LOW_YIELD
//    private String sblYieldLimit     = ""; // LOT YIELD 기준
//    private String sblSubBinaCounter = ""; // 특정 SUB BIN COUNTER LIMIT 설정값
//    private String sblSubBinaLimit   = ""; // 특정 SUB BIN % LIMIT 설정값
//    private String sblSubBinbCounter = ""; // 특정 SUB BIN COUNTER LIMIT 설정값
//    private String sblSubBinbLimit   = ""; // 특정 SUB BIN % LIMIT 설정값
//    private String sblBin9Counter    = ""; // OPERATOR 입력 BIN9 갯수 LIMIT 설정 값.
//    private String sblBin9Limit      = ""; // OPERATOR 입력 BIN9   %  LIMIT 설정 값.
//    private String mainBin           = ""; //
//    private String ngBin             = ""; //

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

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
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

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
    }

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }
}