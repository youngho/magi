package kr.famos.bets.efficiencyAnalysis.testEfficiency.dto;

/**
 * BETS-UI-0601
 * Test Efficiency
 */
public class EfficiencyUsingLotDto {
    private String testerNumber  = ""; // Tester Number
    private String lotId         = "";
    private String processCode   = "";

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
}
