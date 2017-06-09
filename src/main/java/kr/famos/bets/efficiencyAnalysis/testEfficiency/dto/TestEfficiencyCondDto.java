package kr.famos.bets.efficiencyAnalysis.testEfficiency.dto;

/**
 * BETS-UI-0601
 * Test Efficiency
 * UI의 조회 조건과 동일해야 한다
 */
public class TestEfficiencyCondDto {
    private String searchTimeStart = ""; // LOT 시작일시(PRELOT_END_TIME)가 이 시간보다 큰 값을 조회한다
    private String searchTimeEnd   = ""; // LOT 끝(SBL_END_TIME)가 이 시간보다 작은 값을 조회한다
    private String testerNumber    = ""; // Tester Number

    public String getSearchTimeStart() {
        return searchTimeStart;
    }

    public void setSearchTimeStart(String searchTimeStart) {
        this.searchTimeStart = searchTimeStart;
    }

    public String getSearchTimeEnd() {
        return searchTimeEnd;
    }

    public void setSearchTimeEnd(String searchTimeEnd) {
        this.searchTimeEnd = searchTimeEnd;
    }

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }
}
