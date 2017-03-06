package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-03-06.
 */
public class CasiBinDto extends ProgramHeaderDto{
    private int casiSeq              = 0;  //
    private String shotStartTime     = ""; // DUT_MAIN_BIN 시작시간
    private String shotEndTime       = ""; // DUT_MAIN_BIN 종료시간
    private String dutMainBin        = ""; //

    public int getCasiSeq() {
        return casiSeq;
    }

    public void setCasiSeq(int casiSeq) {
        this.casiSeq = casiSeq;
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

    public String getDutMainBin() {
        return dutMainBin;
    }

    public void setDutMainBin(String dutMainBin) {
        this.dutMainBin = dutMainBin;
    }
}
