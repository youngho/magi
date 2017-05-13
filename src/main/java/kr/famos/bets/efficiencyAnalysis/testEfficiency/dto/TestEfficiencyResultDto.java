package kr.famos.bets.efficiencyAnalysis.testEfficiency.dto;

/**
 * BETS-UI-0601
 * Test Efficiency
 */
public class TestEfficiencyResultDto {
    private String partNumber        = ""; // PART NUMBER
    private String processCode       = ""; // PROCESS CODE
    private String mainProgramName   = ""; // MAIN PROGRAM NAME
    private String testerModel       = ""; // TESTER MODEL NAME
    private String para              = ""; //

    private String testTimeAverage   = ""; // 평균 테스트 시간
    private String testTimeMax       = ""; // 테스트 최대시간
    private String testTimeMin       = ""; // 테스트 최소시간

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

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getPara() {
        return para;
    }

    public void setPara(String para) {
        this.para = para;
    }

    public String getTestTimeAverage() {
        return testTimeAverage;
    }

    public void setTestTimeAverage(String testTimeAverage) {
        this.testTimeAverage = testTimeAverage;
    }

    public String getTestTimeMax() {
        return testTimeMax;
    }

    public void setTestTimeMax(String testTimeMax) {
        this.testTimeMax = testTimeMax;
    }

    public String getTestTimeMin() {
        return testTimeMin;
    }

    public void setTestTimeMin(String testTimeMin) {
        this.testTimeMin = testTimeMin;
    }
}
