package kr.famos.bets.dashboard.dto;

/**
 * Created by yhkim on 2017-03-22.
 */
public class AxesChartDto {

    private String processCode = "";    // 공정코드
    private String mon = "";
    private int tav = 0;
    private int tmin = 0;
    private int tmax = 0;
    private float prec = 0;
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

    public int getTav() {
        return tav;
    }

    public void setTav(int tav) {
        this.tav = tav;
    }

    public int getTmin() {
        return tmin;
    }

    public void setTmin(int tmin) {
        this.tmin = tmin;
    }

    public int getTmax() {
        return tmax;
    }

    public void setTmax(int tmax) {
        this.tmax = tmax;
    }

    public float getPrec() {
        return prec;
    }

    public void setPrec(float prec) {
        this.prec = prec;
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