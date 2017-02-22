package kr.famos.bets.domain;

/**
 * Created by yhkim on 2017-01-31.
 */
public class StIndex {
    private String lotNumber = "";    // LOT_NUMBER
    private String processName = "";    // PROCESS_NAME
    private String endDate = "";    // 종료시간
    private String endTime = "";    // 종료시간
    private String partnumberName = "";    // PRODUCT_NAME
    private String testerNumber = "";    // TESTER_NUMBER
    private String testerHead = "";    // TESTER_HEAD
    private String operator = "";    // 사용자
    private String startDate = "";    // 시작시간
    private String startTime = "";    // 시작시간
    private int testCount = 0;    // TEST_COUNT
    private int passCount = 0;    // PASS_COUNT
    private String testerModel = "";    // TESTER_MODEL
    private String lotType = "";    // LOT_TYPE
    private int testTime = 0;    // TEST_TIME
    private int indexTime = 0;    // INDEX_TIME
    private int totalCycle = 0;    // TOTAL_CYCLE
    private int offSocket = 0;    // OFF_SOCKET
    private int totalSocket = 0;    // TOTAL_SOCKET
    private String programName = "";    // PROGRAM_NAME
    private String headModel = "";    // HEAD_MODEL
    private int totalCal = 0;    // TOTAL_CAL
    private int jamTime = 0;    // 대시시간
    private int gojangTime = 0;    // 고장시간
    private int indexAvg = 0;    // INDEX_AVG
    private int totalTime = 0;    // TOTAL_TIME
    private int totalCputime = 0;    // TOTAL_CPUTIME
    private int indexSum = 0;    // INDEX_SUM
    private int allSocket = 0;    // ALL_SOCKET
    private int testerPara = 0;    // TESTER_PARA
    private String sysDate = "";    // SYS_DATE
    private int centerStTime = 0;    // CENTER_ST_TIME
    private int centerIndexTime = 0;    // CENTER_INDEX_TIME
    private String retestCount = "";    // RETEST_COUNT
    private String boardId = "";    // BOARD_ID
    private int lotChange = 0;    // LOT_CHANGE
    private int pgmLoad = 0;    // PGM_LOAD
    private int loadTime = 0;    // LOAD 시간
    private int finalEnd = 0;    // FINAL_END
    private int retestTime = 0;    // RETEST_TIME
    private int unloadTime = 0;    // UNLOAD_TIME
    private int calCount = 0;    // CAL_COUNT
    private int socketLoss = 0;    // SOCKET_LOSS
    private int handlerPara = 0;    // HANDLER_PARA
    private String cycleTestTime = "";    // CYCLE_TEST_TIME
    private String cycleIndexTime = "";    // CYCLE_INDEX_TIME

    public String getLotNumber() {
        return lotNumber;
    }

    public void setLotNumber(String lotNumber) {
        this.lotNumber = lotNumber;
    }

    public String getProcessName() {
        return processName;
    }

    public void setProcessName(String processName) {
        this.processName = processName;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getPartnumberName() {
        return partnumberName;
    }

    public void setPartnumberName(String partnumberName) {
        this.partnumberName = partnumberName;
    }

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }

    public String getTesterHead() {
        return testerHead;
    }

    public void setTesterHead(String testerHead) {
        this.testerHead = testerHead;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public int getTestCount() {
        return testCount;
    }

    public void setTestCount(int testCount) {
        this.testCount = testCount;
    }

    public int getPassCount() {
        return passCount;
    }

    public void setPassCount(int passCount) {
        this.passCount = passCount;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getLotType() {
        return lotType;
    }

    public void setLotType(String lotType) {
        this.lotType = lotType;
    }

    public int getTestTime() {
        return testTime;
    }

    public void setTestTime(int testTime) {
        this.testTime = testTime;
    }

    public int getIndexTime() {
        return indexTime;
    }

    public void setIndexTime(int indexTime) {
        this.indexTime = indexTime;
    }

    public int getTotalCycle() {
        return totalCycle;
    }

    public void setTotalCycle(int totalCycle) {
        this.totalCycle = totalCycle;
    }

    public int getOffSocket() {
        return offSocket;
    }

    public void setOffSocket(int offSocket) {
        this.offSocket = offSocket;
    }

    public int getTotalSocket() {
        return totalSocket;
    }

    public void setTotalSocket(int totalSocket) {
        this.totalSocket = totalSocket;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public String getHeadModel() {
        return headModel;
    }

    public void setHeadModel(String headModel) {
        this.headModel = headModel;
    }

    public int getTotalCal() {
        return totalCal;
    }

    public void setTotalCal(int totalCal) {
        this.totalCal = totalCal;
    }

    public int getJamTime() {
        return jamTime;
    }

    public void setJamTime(int jamTime) {
        this.jamTime = jamTime;
    }

    public int getGojangTime() {
        return gojangTime;
    }

    public void setGojangTime(int gojangTime) {
        this.gojangTime = gojangTime;
    }

    public int getIndexAvg() {
        return indexAvg;
    }

    public void setIndexAvg(int indexAvg) {
        this.indexAvg = indexAvg;
    }

    public int getTotalTime() {
        return totalTime;
    }

    public void setTotalTime(int totalTime) {
        this.totalTime = totalTime;
    }

    public int getTotalCputime() {
        return totalCputime;
    }

    public void setTotalCputime(int totalCputime) {
        this.totalCputime = totalCputime;
    }

    public int getIndexSum() {
        return indexSum;
    }

    public void setIndexSum(int indexSum) {
        this.indexSum = indexSum;
    }

    public int getAllSocket() {
        return allSocket;
    }

    public void setAllSocket(int allSocket) {
        this.allSocket = allSocket;
    }

    public int getTesterPara() {
        return testerPara;
    }

    public void setTesterPara(int testerPara) {
        this.testerPara = testerPara;
    }

    public String getSysDate() {
        return sysDate;
    }

    public void setSysDate(String sysDate) {
        this.sysDate = sysDate;
    }

    public int getCenterStTime() {
        return centerStTime;
    }

    public void setCenterStTime(int centerStTime) {
        this.centerStTime = centerStTime;
    }

    public int getCenterIndexTime() {
        return centerIndexTime;
    }

    public void setCenterIndexTime(int centerIndexTime) {
        this.centerIndexTime = centerIndexTime;
    }

    public String getRetestCount() {
        return retestCount;
    }

    public void setRetestCount(String retestCount) {
        this.retestCount = retestCount;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public int getLotChange() {
        return lotChange;
    }

    public void setLotChange(int lotChange) {
        this.lotChange = lotChange;
    }

    public int getPgmLoad() {
        return pgmLoad;
    }

    public void setPgmLoad(int pgmLoad) {
        this.pgmLoad = pgmLoad;
    }

    public int getLoadTime() {
        return loadTime;
    }

    public void setLoadTime(int loadTime) {
        this.loadTime = loadTime;
    }

    public int getFinalEnd() {
        return finalEnd;
    }

    public void setFinalEnd(int finalEnd) {
        this.finalEnd = finalEnd;
    }

    public int getRetestTime() {
        return retestTime;
    }

    public void setRetestTime(int retestTime) {
        this.retestTime = retestTime;
    }

    public int getUnloadTime() {
        return unloadTime;
    }

    public void setUnloadTime(int unloadTime) {
        this.unloadTime = unloadTime;
    }

    public int getCalCount() {
        return calCount;
    }

    public void setCalCount(int calCount) {
        this.calCount = calCount;
    }

    public int getSocketLoss() {
        return socketLoss;
    }

    public void setSocketLoss(int socketLoss) {
        this.socketLoss = socketLoss;
    }

    public int getHandlerPara() {
        return handlerPara;
    }

    public void setHandlerPara(int handlerPara) {
        this.handlerPara = handlerPara;
    }

    public String getCycleTestTime() {
        return cycleTestTime;
    }

    public void setCycleTestTime(String cycleTestTime) {
        this.cycleTestTime = cycleTestTime;
    }

    public String getCycleIndexTime() {
        return cycleIndexTime;
    }

    public void setCycleIndexTime(String cycleIndexTime) {
        this.cycleIndexTime = cycleIndexTime;
    }

}