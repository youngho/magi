package kr.famos.bets.efficiencyAnalysis.testEfficiency.dto;

/**
 * BETS-UI-0601
 * Test Efficiency
 * MAIN_BIN 테이블의 HEADER 에 있는 시간들을 조회하는데 사용한다
 */
public class MainTimeResultDto {
    private String testerNumber  = "";   // Tester Number
    private String lotId         = "";
    private String processCode   = "";
    private String prelotEndTime = "";
    private String lotInTime     = "";
    private String lotInEndTime  = "";
    private String sblEndTime    = "";
    private String finalEndTime  = "";
    private long loseTimeOfLotChage   = 0; // 이전 lot의 test가 완료된 이후부터 다음 lot의 test_in이 될 때까지 시간
    private long loseTimeOfPgmLoading = 0; // lot이 test_in 이후부터 program을 가져와서 loading까지의 시간
    private long loseTimeOfSbl        = 0; // 작업자가 Bin 값을 처리하는 시간, FINAL_END_TIME이 PRELOT_END_TIME과 동일

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

    public String getPrelotEndTime() {
        return prelotEndTime;
    }

    public void setPrelotEndTime(String prelotEndTime) {
        this.prelotEndTime = prelotEndTime;
    }

    public String getLotInTime() {
        return lotInTime;
    }

    public void setLotInTime(String lotInTime) {
        this.lotInTime = lotInTime;
    }

    public String getLotInEndTime() {
        return lotInEndTime;
    }

    public void setLotInEndTime(String lotInEndTime) {
        this.lotInEndTime = lotInEndTime;
    }

    public String getSblEndTime() {
        return sblEndTime;
    }

    public void setSblEndTime(String sblEndTime) {
        this.sblEndTime = sblEndTime;
    }

    public String getFinalEndTime() {
        return finalEndTime;
    }

    public void setFinalEndTime(String finalEndTime) {
        this.finalEndTime = finalEndTime;
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

    public long getLoseTimeOfSbl() {
        return loseTimeOfSbl;
    }

    public void setLoseTimeOfSbl(long loseTimeOfSbl) {
        this.loseTimeOfSbl = loseTimeOfSbl;
    }
}
