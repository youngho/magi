package kr.famos.bets.efficiencyAnalysis.testEfficiency.dto;

/**
 * BETS-UI-0601
 * Test Efficiency
 * CASI 테이블의 SHOT 과 관련된 시간들을 조회하는데 사용한다
 */
public class CasiTimeCondDto {
    private String testerNumber = ""; // Tester Number
    private String lotId        = "";
    private String processCode  = "";
    private String testCounter  = ""; // prime Test 넘버는 '0'이고 retest 횟수만큼 증가한다.

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

    public String getTestCounter() {
        return testCounter;
    }

    public void setTestCounter(String testCounter) {
        this.testCounter = testCounter;
    }
}
