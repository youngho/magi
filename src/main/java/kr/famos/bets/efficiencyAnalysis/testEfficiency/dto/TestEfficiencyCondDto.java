package kr.famos.bets.efficiencyAnalysis.testEfficiency.dto;

/**
 * BETS-UI-0601
 * Test Efficiency
 */
public class TestEfficiencyCondDto {
    private String searchTimeStart      = ""; // LOT 시작일시(PRELOT_END_TIME)가 이 시간보다 큰 값을 조회한다
    private String searchTimeEnd        = ""; // LOT 끝(SBL_END_TIME)가 이 시간보다 작은 값을 조회한다
    private String testerNumber      = ""; // Tester Number

}
