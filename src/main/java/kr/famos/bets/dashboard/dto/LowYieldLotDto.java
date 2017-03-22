package kr.famos.bets.dashboard.dto;

/**
 * Created by yhkim on 2017-03-22.
 * DashboardDto 에서 LowYieldLot을 조회 하는 용도이다.
 */
public class LowYieldLotDto {
    private String lotId = "";
    private String processCode = "";
    private String yield = "";
    private String endTime = "";

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

    public String getYield() {
        return yield;
    }

    public void setYield(String yield) {
        this.yield = yield;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
}
