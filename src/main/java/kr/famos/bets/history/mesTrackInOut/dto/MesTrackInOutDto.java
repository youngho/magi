package kr.famos.bets.history.mesTrackInOut.dto;

/**
 * Created by yhkim on 2017-03-11.
 */
public class MesTrackInOutDto {
    private String mesMode           = ""; //
    private String requestLotMessage = ""; //

    private String createDateStart   = ""; // 생성일시시작
    private String createDateEnd     = ""; // 생성일시끝

    public String getMesMode() {
        return mesMode;
    }

    public void setMesMode(String mesMode) {
        this.mesMode = mesMode;
    }

    public String getRequestLotMessage() {
        return requestLotMessage;
    }

    public void setRequestLotMessage(String requestLotMessage) {
        this.requestLotMessage = requestLotMessage;
    }

    public String getCreateDateStart() {
        return createDateStart;
    }

    public void setCreateDateStart(String createDateStart) {
        this.createDateStart = createDateStart;
    }

    public String getCreateDateEnd() {
        return createDateEnd;
    }

    public void setCreateDateEnd(String createDateEnd) {
        this.createDateEnd = createDateEnd;
    }
}
