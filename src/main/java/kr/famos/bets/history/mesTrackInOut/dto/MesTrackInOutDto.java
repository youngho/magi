package kr.famos.bets.history.mesTrackInOut.dto;

/**
 * Created by yhkim on 2017-03-11.
 */
public class MesTrackInOutDto {
    private String mesMode           = ""; //
    private String requestLotMessage = ""; //
    private String btesResult        = ""; //
    private String requestLotDate    = ""; //
    private String receiveLotMessage = ""; //
    private String receiveLotDate    = ""; //
    private String createDate        = ""; //
    private String createUser        = ""; //

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

    public String getBtesResult() {
        return btesResult;
    }

    public void setBtesResult(String btesResult) {
        this.btesResult = btesResult;
    }

    public String getRequestLotDate() {
        return requestLotDate;
    }

    public void setRequestLotDate(String requestLotDate) {
        this.requestLotDate = requestLotDate;
    }

    public String getReceiveLotMessage() {
        return receiveLotMessage;
    }

    public void setReceiveLotMessage(String receiveLotMessage) {
        this.receiveLotMessage = receiveLotMessage;
    }

    public String getReceiveLotDate() {
        return receiveLotDate;
    }

    public void setReceiveLotDate(String receiveLotDate) {
        this.receiveLotDate = receiveLotDate;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
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
