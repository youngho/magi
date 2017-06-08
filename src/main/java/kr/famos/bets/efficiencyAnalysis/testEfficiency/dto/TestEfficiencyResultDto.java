package kr.famos.bets.efficiencyAnalysis.testEfficiency.dto;

/**
 * BETS-UI-0601
 * Test Efficiency
 */
public class TestEfficiencyResultDto {
    private String testerNumber      = "";

    /**
     * 8종류의 loseTime 에 대한 정의
     */
    private int loseTimeOfLotChage      = 0; // 이전 lot의 test가 완료된 이후부터 다음 lot의 test_in이 될 때까지 시간
    private int loseTimeOfPgmLoading    = 0; // lot이 test_in 이후부터 program을 가져와서 loading까지의 시간
    private int loseTimeOfHdLoading     = 0; // Program loading 이후 H/D로부터 최초의 test start signal이 발생까지의 시간
    private int loseTimeOfTestTime      = 0; // test time 1/n shot
    private int loseTimeOfRetestLoading = 0; // retest loading time
    private int loseTimeOfRetest        = 0; // retest
    private int loseTimeOfUnload        = 0; // 최종 retest 결과 발생 시간부터 최종 완료 신호까지의 시간
    private int loseTimeOfSbl           = 0; // 작업자가 Bin 값을 처리하는 시간, FINAL_END_TIME이 PRELOT_END_TIME과 동일

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }

    public int getLoseTimeOfLotChage() {
        return loseTimeOfLotChage;
    }

    public void setLoseTimeOfLotChage(int loseTimeOfLotChage) {
        this.loseTimeOfLotChage = loseTimeOfLotChage;
    }

    public int getLoseTimeOfPgmLoading() {
        return loseTimeOfPgmLoading;
    }

    public void setLoseTimeOfPgmLoading(int loseTimeOfPgmLoading) {
        this.loseTimeOfPgmLoading = loseTimeOfPgmLoading;
    }

    public int getLoseTimeOfHdLoading() {
        return loseTimeOfHdLoading;
    }

    public void setLoseTimeOfHdLoading(int loseTimeOfHdLoading) {
        this.loseTimeOfHdLoading = loseTimeOfHdLoading;
    }

    public int getLoseTimeOfTestTime() {
        return loseTimeOfTestTime;
    }

    public void setLoseTimeOfTestTime(int loseTimeOfTestTime) {
        this.loseTimeOfTestTime = loseTimeOfTestTime;
    }

    public int getLoseTimeOfRetestLoading() {
        return loseTimeOfRetestLoading;
    }

    public void setLoseTimeOfRetestLoading(int loseTimeOfRetestLoading) {
        this.loseTimeOfRetestLoading = loseTimeOfRetestLoading;
    }

    public int getLoseTimeOfRetest() {
        return loseTimeOfRetest;
    }

    public void setLoseTimeOfRetest(int loseTimeOfRetest) {
        this.loseTimeOfRetest = loseTimeOfRetest;
    }

    public int getLoseTimeOfUnload() {
        return loseTimeOfUnload;
    }

    public void setLoseTimeOfUnload(int loseTimeOfUnload) {
        this.loseTimeOfUnload = loseTimeOfUnload;
    }

    public int getLoseTimeOfSbl() {
        return loseTimeOfSbl;
    }

    public void setLoseTimeOfSbl(int loseTimeOfSbl) {
        this.loseTimeOfSbl = loseTimeOfSbl;
    }
}