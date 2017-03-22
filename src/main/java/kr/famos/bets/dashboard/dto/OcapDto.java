package kr.famos.bets.dashboard.dto;

/**
 * Created by yhkim on 2017-03-22.
 * DashboardDto 에서 LowYieldLot을 조회 하는 용도이다.
 */
public class OcapDto {
    private String lotId = "";
    private String oper = "";
    private String sblCode = "";
    private String transTime = "";
    private String status = "";

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
    }

    public String getOper() {
        return oper;
    }

    public void setOper(String oper) {
        this.oper = oper;
    }

    public String getSblCode() {
        return sblCode;
    }

    public void setSblCode(String sblCode) {
        this.sblCode = sblCode;
    }

    public String getTransTime() {
        return transTime;
    }

    public void setTransTime(String transTime) {
        this.transTime = transTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
