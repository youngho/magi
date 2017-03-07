package kr.famos.bets.yieldAnalysis.lotYield.dto;

/**
 * Created by yhkim on 2017-02-22.
 */
public class LotYieldDto {
    private int casiSeq              = 0;  //
    private String testerNumber      = ""; // TESTER 번호(Host id)
    private String testerModel       = ""; // TESTER MODEL NAME
    private String handlerModel      = ""; // HANDLER MODEL NAME
    private String head              = ""; // HEAD NUMBER A or B
    private String lotId             = ""; // LOT ID
    private String processCode       = ""; // PROCESS CODE
    private String partNumber        = ""; // PART NUMBER
    private String mainProgramName   = ""; // MAIN PROGRAM NAME
    private String grade             = ""; // HQ:HIGH QUALITY
    private String fab               = ""; // FAB SITE
    private String firmwareName      = ""; // FIREWARE NAME
    private String firmwareVersion   = ""; // FIRMWARE VERSION
    private String temperature       = ""; // TEMPERATURE SPEC
    private String operatorId        = ""; // OPERATOR ID
    private String quantity          = ""; // 해당 LOT의 제품 수량
    private String functionKey       = ""; // FUNCTION KEY(ADVANTEST T5503만 해당됨)
    private String testCounter       = ""; // TEST 횟수 (0 or 1 or 2.....)
    private String testInput         = ""; // TEST INPUT LOADING방식 (AUTO or MANUAL)
    private String testFlow          = ""; // TEST FLOW (RETEST or FINAL OR CANCEL)
    private String reworkFlag        = ""; // REWORK FLAG
    private String testMode          = ""; // TEST_IN_MANUAL에서 선택한 MODE
    private String boardId           = ""; // TEST BOARD ID (FIX)
    private String prelotEndTime     = ""; // 이전 LOT 끝난 시간.
    private String lotInTime         = ""; // OPERATOR ID 입력 시점
    private String betsInTime        = ""; // LC가 BETS한테 LOT 정보 주는 시점.
    private String betsEndTime       = ""; // LC가 BETS로 부터 LOT 정보를 받는 시점.(PROGREAM,LOT 정보)
    private String lotInEndTime      = ""; // TEST PROGRAM UPLOAD 시점.
    private String lotStartTime      = ""; // SRQKIND#02 or SRQKIND#04 START 시점.
    private String endTime           = ""; // SRQKIND#10 시점.
    private String binInTime         = ""; // 작업자가 BIN 입력 시작 시점.(BIN POPUP창 활성화 시점)   --->FINAL_END일경우만 표시,--->RE_TEST 경우는 0
    private String binEndTime        = ""; // 작업자가 BIN 입력 완료 시점.(TEST OUT Buttom Push 시점) ---
    private String sblInTime         = ""; // BETS 서버로 DATA 전송한 시점.
    private String sblEndTime        = ""; // BETS 서버로 부터 이상 유무의 명령을 받은 시점.
    private String finalEndTime      = ""; // 현재 LOT에 대한 LC의 완료시점에서 LC의 모든 DATA가 RESET된 시점을 뺀값.
    private String sblResult         = ""; // OPBIN1_ERROR/OPBIN2_ERROR/OPBIN3_ERROR/OPBIN4_ERROR/OPBIN9_ERROR/LOW_YIELD
    private String sblYieldLimit     = ""; // LOT YIELD 기준
    private String sblSubBinaCounter = ""; // 특정 SUB BIN COUNTER LIMIT 설정값
    private String sblSubBinaLimit   = ""; // 특정 SUB BIN % LIMIT 설정값
    private String sblSubBinbCounter = ""; // 특정 SUB BIN COUNTER LIMIT 설정값
    private String sblSubBinbLimit   = ""; // 특정 SUB BIN % LIMIT 설정값
    private String sblBin9Counter    = ""; // OPERATOR 입력 BIN9 갯수 LIMIT 설정 값.
    private String sblBin9Limit      = ""; // OPERATOR 입력 BIN9   %  LIMIT 설정 값.
    private String shotStartTime     = ""; // DUT_MAIN_BIN 시작시간
    private String shotEndTime       = ""; // DUT_MAIN_BIN 종료시간
    private String dutMainBin        = ""; //

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


    public int getCasiSeq() {
        return casiSeq;
    }

    public void setCasiSeq(int casiSeq) {
        this.casiSeq = casiSeq;
    }

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

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
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

    public String getSblYieldLimit() {
        return sblYieldLimit;
    }

    public void setSblYieldLimit(String sblYieldLimit) {
        this.sblYieldLimit = sblYieldLimit;
    }

    public String getSblSubBinaCounter() {
        return sblSubBinaCounter;
    }

    public void setSblSubBinaCounter(String sblSubBinaCounter) {
        this.sblSubBinaCounter = sblSubBinaCounter;
    }

    public String getSblSubBinaLimit() {
        return sblSubBinaLimit;
    }

    public void setSblSubBinaLimit(String sblSubBinaLimit) {
        this.sblSubBinaLimit = sblSubBinaLimit;
    }

    public String getSblSubBinbCounter() {
        return sblSubBinbCounter;
    }

    public void setSblSubBinbCounter(String sblSubBinbCounter) {
        this.sblSubBinbCounter = sblSubBinbCounter;
    }

    public String getSblSubBinbLimit() {
        return sblSubBinbLimit;
    }

    public void setSblSubBinbLimit(String sblSubBinbLimit) {
        this.sblSubBinbLimit = sblSubBinbLimit;
    }

    public String getSblBin9Counter() {
        return sblBin9Counter;
    }

    public void setSblBin9Counter(String sblBin9Counter) {
        this.sblBin9Counter = sblBin9Counter;
    }

    public String getSblBin9Limit() {
        return sblBin9Limit;
    }

    public void setSblBin9Limit(String sblBin9Limit) {
        this.sblBin9Limit = sblBin9Limit;
    }

    public String getShotStartTime() {
        return shotStartTime;
    }

    public void setShotStartTime(String shotStartTime) {
        this.shotStartTime = shotStartTime;
    }

    public String getShotEndTime() {
        return shotEndTime;
    }

    public void setShotEndTime(String shotEndTime) {
        this.shotEndTime = shotEndTime;
    }

    public String getDutMainBin() {
        return dutMainBin;
    }

    public void setDutMainBin(String dutMainBin) {
        this.dutMainBin = dutMainBin;
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

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
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
