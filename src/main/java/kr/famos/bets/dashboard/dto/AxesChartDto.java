package kr.famos.bets.dashboard.dto;

/**
 * Created by yhkim on 2017-03-22.
 */
public class AxesChartDto {

    private String processCode = "";    // 공정코드
    private String mon = "";
    private int capa = 0;
    private int yieldMin = 60;          // Yield 표현시 저수율 기준
    private int yieldMax = 80;          // Yield 표현시 고수율 기준
    private float yield = 0;
    private String rangeStart = "";
    private String rangeEnd = "";

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getMon() {
        return mon;
    }

    public void setMon(String mon) {
        this.mon = mon;
    }

    public int getCapa() {
        return capa;
    }

    public void setCapa(int capa) {
        this.capa = capa;
    }

    public int getYieldMin() {
        return yieldMin;
    }

    public void setYieldMin(int yieldMin) {
        this.yieldMin = yieldMin;
    }

    public int getYieldMax() {
        return yieldMax;
    }

    public void setYieldMax(int yieldMax) {
        this.yieldMax = yieldMax;
    }

    public float getYield() {
        return yield;
    }

    public void setYield(float yield) {
        this.yield = yield;
    }

    public String getRangeStart() {
        return rangeStart;
    }

    public void setRangeStart(String rangeStart) {
        this.rangeStart = rangeStart;
    }

    public String getRangeEnd() {
        return rangeEnd;
    }

    public void setRangeEnd(String rangeEnd) {
        this.rangeEnd = rangeEnd;
    }
}