package kr.famos.bets.yieldAnalysis.lotYield.dto;

/**
 * Created by yhkim on 2017-02-22.
 *
 * 20170606 : 강래원 책임의 요구사함으로 컬럼 순서가 아래와 같이 바뀜
 */
public class LotYieldResultDto {
    //    private int casiSeq              = 0;  //
    private String partNumber = ""; // PART NUMBER
    private String lotId = ""; // LOT ID
    private String processCode = ""; // PROCESS CODE
    private String temperature = ""; // TEMPERATURE SPEC
    private String mainProgramName = ""; // MAIN PROGRAM NAME

    private String lotStartTime      = ""; // SRQKIND#02 or SRQKIND#04 START 시점.

    private String endTime = ""; // SRQKIND#10 시점.
    private String sblResult = ""; // OPBIN1_ERROR/OPBIN2_ERROR/OPBIN3_ERROR/OPBIN4_ERROR/OPBIN9_ERROR/LOW_YIELD
    private int quantity = 0; // 해당 LOT의 제품 수량
    private int input = 0;
    private float yield = 0;
    private int pass = 0;
    private int bin1 = 0;
    private int bin2 = 0;
    private int bin3 = 0;
    private int bin4 = 0;
    private int bin5 = 0;
    private int bin6 = 0;
    private int bin7 = 0;
    private int bin8 = 0;
    private int bin9 = 0;

    private String firmwareName = ""; // FIREWARE NAME
    private String functionKey = ""; // FUNCTION KEY(ADVANTEST T5503만 해당됨)
    private String testerModel = ""; // TESTER MODEL NAME
    private String testerNumber = ""; // TESTER 번호(Host id)
    private String handlerModel = ""; // HANDLER MODEL NAME
    private String head = ""; // HEAD NUMBER A or B
    private String grade = ""; // HQ:HIGH QUALITY
    private String fab = ""; // FAB SITE
    private String firmwareVersion = ""; // FIRMWARE VERSION
    private String operatorId = ""; // OPERATOR ID
    private String testCounter = ""; // TEST 횟수 (0 or 1 or 2.....)
    private String testInput = ""; // TEST INPUT LOADING방식 (AUTO or MANUAL)
    private String testFlow = ""; // TEST FLOW (RETEST or FINAL OR CANCEL)
    private String reworkFlag = ""; // REWORK FLAG
    private String testMode = ""; // TEST_IN_MANUAL에서 선택한 MODE
    private String boardId = ""; // TEST BOARD ID (FIX)
    //    private String prelotEndTime     = ""; // 이전 LOT 끝난 시간.
//    private String lotInTime         = ""; // OPERATOR ID 입력 시점
//    private String betsInTime        = ""; // LC가 BETS한테 LOT 정보 주는 시점.
//    private String betsEndTime       = ""; // LC가 BETS로 부터 LOT 정보를 받는 시점.(PROGREAM,LOT 정보)
//    private String lotInEndTime      = ""; // TEST PROGRAM UPLOAD 시점.
//    private String binInTime         = ""; // 작업자가 BIN 입력 시작 시점.(BIN POPUP창 활성화 시점)   --->FINAL_END일경우만 표시,--->RE_TEST 경우는 0
//    private String binEndTime        = ""; // 작업자가 BIN 입력 완료 시점.(TEST OUT Buttom Push 시점) ---
//    private String sblInTime         = ""; // BETS 서버로 DATA 전송한 시점.
//    private String sblEndTime        = ""; // BETS 서버로 부터 이상 유무의 명령을 받은 시점.
//    private String finalEndTime      = ""; // 현재 LOT에 대한 LC의 완료시점에서 LC의 모든 DATA가 RESET된 시점을 뺀값.
    private String sblYieldResult = "";
    private String sblBin1Result = "";
    private String sblBin2Result = "";
    private String sblBin3Result = "";
    private String sblBin4Result = "";
    private String sblBin5Result = "";
    private String sblBin6Result = "";
    private String sblBin7Result = "";
    private String sblBin8Result = "";
    private String sblBin9Result = "";
    private String sblFirmwareResult = "";
//    private String sblYieldLimit     = ""; // LOT YIELD 기준
//    private String sblSubBinaCounter = ""; // 특정 SUB BIN COUNTER LIMIT 설정값
//    private String sblSubBinaLimit   = ""; // 특정 SUB BIN % LIMIT 설정값
//    private String sblSubBinbCounter = ""; // 특정 SUB BIN COUNTER LIMIT 설정값
//    private String sblSubBinbLimit   = ""; // 특정 SUB BIN % LIMIT 설정값
//    private String sblBin9Counter    = ""; // OPERATOR 입력 BIN9 갯수 LIMIT 설정 값.
//    private String sblBin9Limit      = ""; // OPERATOR 입력 BIN9   %  LIMIT 설정 값.
//    private String shotStartTime     = ""; // DUT_MAIN_BIN 시작시간
//    private String shotEndTime       = ""; // DUT_MAIN_BIN 종료시간
//    private String dutMainBin        = ""; //



    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getHandlerModel() {
        return handlerModel;
    }

    public void setHandlerModel(String handlerModel) {
        this.handlerModel = handlerModel;
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

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
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

    public String getFirmwareName() {
        return firmwareName;
    }

    public void setFirmwareName(String firmwareName) {
        this.firmwareName = firmwareName;
    }

    public String getFirmwareVersion() {
        return firmwareVersion;
    }

    public void setFirmwareVersion(String firmwareVersion) {
        this.firmwareVersion = firmwareVersion;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(String operatorId) {
        this.operatorId = operatorId;
    }

    public String getLotStartTime() {
        return lotStartTime;
    }

    public void setLotStartTime(String lotStartTime) {
        this.lotStartTime = lotStartTime;
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

    public String getTestCounter() {
        return testCounter;
    }

    public void setTestCounter(String testCounter) {
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

    public String getReworkFlag() {
        return reworkFlag;
    }

    public void setReworkFlag(String reworkFlag) {
        this.reworkFlag = reworkFlag;
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

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
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

    public int getInput() {
        return input;
    }

    public void setInput(int input) {
        this.input = input;
    }

    public float getYield() {
        return yield;
    }

    public void setYield(float yield) {
        this.yield = yield;
    }

    public int getPass() {
        return pass;
    }

    public void setPass(int pass) {
        this.pass = pass;
    }

    public int getBin1() {
        return bin1;
    }

    public void setBin1(int bin1) {
        this.bin1 = bin1;
    }

    public int getBin2() {
        return bin2;
    }

    public void setBin2(int bin2) {
        this.bin2 = bin2;
    }

    public int getBin3() {
        return bin3;
    }

    public void setBin3(int bin3) {
        this.bin3 = bin3;
    }

    public int getBin4() {
        return bin4;
    }

    public void setBin4(int bin4) {
        this.bin4 = bin4;
    }

    public int getBin5() {
        return bin5;
    }

    public void setBin5(int bin5) {
        this.bin5 = bin5;
    }

    public int getBin6() {
        return bin6;
    }

    public void setBin6(int bin6) {
        this.bin6 = bin6;
    }

    public int getBin7() {
        return bin7;
    }

    public void setBin7(int bin7) {
        this.bin7 = bin7;
    }

    public int getBin8() {
        return bin8;
    }

    public void setBin8(int bin8) {
        this.bin8 = bin8;
    }

    public int getBin9() {
        return bin9;
    }

    public void setBin9(int bin9) {
        this.bin9 = bin9;
    }

    public String getSblFirmwareResult() {
        return sblFirmwareResult;
    }

    public void setSblFirmwareResult(String sblFirmwareResult) {
        this.sblFirmwareResult = sblFirmwareResult;
    }
}
