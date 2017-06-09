package kr.famos.bets.efficiencyAnalysis.testEfficiency.dto;

/**
 * BETS-UI-0601
 * Test Efficiency
 * CASI 테이블의 SHOT 과 관련된 시간들을 조회하는데 사용한다
 * LOT 단위로 테스트에 사용된 시간을 리턴한다
 */
public class CasiTimeResultDto {
    private String testerNumber  = ""; // Tester Number
    private String lotId         = "";
    private String processCode   = "";
    private String shotStartTime = ""; // 조회 조건중 testCounter = '0' 일경우 해당 LOT의 테스트 시작 시간이 넘어온다
    private String shotEndTime   = ""; // 테스트 종료 시간
    private int test_counter     = 0;
    private String test_flow     = "";
    private long testTimeSum     = 0;  // 특정 lot의 테스트에 사용된 시간이 합계되어 나온다

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
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

    public int getTest_counter() {
        return test_counter;
    }

    public void setTest_counter(int test_counter) {
        this.test_counter = test_counter;
    }

    public String getTest_flow() {
        return test_flow;
    }

    public void setTest_flow(String test_flow) {
        this.test_flow = test_flow;
    }

    public long getTestTimeSum() {
        return testTimeSum;
    }

    public void setTestTimeSum(long testTimeSum) {
        this.testTimeSum = testTimeSum;
    }
}
