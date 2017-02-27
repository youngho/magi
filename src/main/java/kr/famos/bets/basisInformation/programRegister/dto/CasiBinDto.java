package kr.famos.bets.basisInformation.programRegister.dto;

import kr.famos.com.dto.ProgramHeaderDto;

/**
 * Created by yhkim on 2017-02-27.
 */
public class CasiBinDto extends ProgramHeaderDto {
    private String shotStartTime = ""; // Shot Start Time
    private String shotEndTime   = ""; // Shot End Time
    private String dutMainBin    = ""; // DUT별 MAIN_BIN 결과

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
