package kr.famos.bets.dashboard.dto;

/**
 * Created by yhkim on 2017-03-28.
 */
public class ChartDetailItemDto {
    private String endTime = "";

    private String lotId = "";
    private String quantity = "";
    private float yield = 0;
    private String processCode = "";
    private String bin8 = "";

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public float getYield() {
        return yield;
    }

    public void setYield(float yield) {
        this.yield = yield;
    }

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getBin8() {
        return bin8;
    }

    public void setBin8(String bin8) {
        this.bin8 = bin8;
    }
}
