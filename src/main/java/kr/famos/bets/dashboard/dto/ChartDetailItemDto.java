package kr.famos.bets.dashboard.dto;

/**
 * Created by yhkim on 2017-03-28.
 */
public class ChartDetailItemDto {
    private String endTime = "";

    private String lotId = "";
    private int quantity = 0;
    private float yield = 0;
    private float yieldAverage = 0;
    private String processCode = "";
    private float bin8 = 0;

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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
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

    public float getBin8() {
        return bin8;
    }

    public void setBin8(float bin8) {
        this.bin8 = bin8;
    }

    public float getYieldAverage() {
        return yieldAverage;
    }

    public void setYieldAverage(float yieldAverage) {
        this.yieldAverage = yieldAverage;
    }
}
