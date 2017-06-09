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
    private long loseTimeOfLotChage      = 0; // 이전 lot의 test가 완료된 이후부터 다음 lot의 test_in이 될 때까지 시간
    private long loseTimeOfPgmLoading    = 0; // lot이 test_in 이후부터 program을 가져와서 loading까지의 시간
    private long loseTimeOfHdLoading     = 0; // Program loading 이후 H/D로부터 최초의 test start signal이 발생까지의 시간
    private long loseTimeOfTestTime      = 0; // test time 1/n shot
    private long loseTimeOfRetestLoading = 0; // retest loading time
    private long loseTimeOfRetest        = 0; // retest
    private long loseTimeOfUnload        = 0; // 최종 retest 결과 발생 시간부터 최종 완료 신호까지의 시간
    private long loseTimeOfSbl           = 0; // 작업자가 Bin 값을 처리하는 시간, FINAL_END_TIME이 PRELOT_END_TIME과 동일

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }

    public long getLoseTimeOfLotChage() {
        return loseTimeOfLotChage;
    }

    public void setLoseTimeOfLotChage(long loseTimeOfLotChage) {
        this.loseTimeOfLotChage = loseTimeOfLotChage;
    }

    public long getLoseTimeOfPgmLoading() {
        return loseTimeOfPgmLoading;
    }

    public void setLoseTimeOfPgmLoading(long loseTimeOfPgmLoading) {
        this.loseTimeOfPgmLoading = loseTimeOfPgmLoading;
    }

    public long getLoseTimeOfHdLoading() {
        return loseTimeOfHdLoading;
    }

    public void setLoseTimeOfHdLoading(long loseTimeOfHdLoading) {
        this.loseTimeOfHdLoading = loseTimeOfHdLoading;
    }

    public long getLoseTimeOfTestTime() {
        return loseTimeOfTestTime;
    }

    public void setLoseTimeOfTestTime(long loseTimeOfTestTime) {
        this.loseTimeOfTestTime = loseTimeOfTestTime;
    }

    public long getLoseTimeOfRetestLoading() {
        return loseTimeOfRetestLoading;
    }

    public void setLoseTimeOfRetestLoading(long loseTimeOfRetestLoading) {
        this.loseTimeOfRetestLoading = loseTimeOfRetestLoading;
    }

    public long getLoseTimeOfRetest() {
        return loseTimeOfRetest;
    }

    public void setLoseTimeOfRetest(long loseTimeOfRetest) {
        this.loseTimeOfRetest = loseTimeOfRetest;
    }

    public long getLoseTimeOfUnload() {
        return loseTimeOfUnload;
    }

    public void setLoseTimeOfUnload(long loseTimeOfUnload) {
        this.loseTimeOfUnload = loseTimeOfUnload;
    }

    public long getLoseTimeOfSbl() {
        return loseTimeOfSbl;
    }

    public void setLoseTimeOfSbl(long loseTimeOfSbl) {
        this.loseTimeOfSbl = loseTimeOfSbl;
    }
}