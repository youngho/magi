package kr.famos.bets.efficiencyAnalysis.testEfficiency.dto;

/**
 * BETS-UI-0601
 * Test Efficiency
 * CASI 테이블의 SHOT 과 관련된 시간들을 조회하는데 사용한다
 */
public class PieDataDto {
    private String name = "";
    private int value = 0;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
