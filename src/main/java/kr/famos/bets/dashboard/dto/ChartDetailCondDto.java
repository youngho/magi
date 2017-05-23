package kr.famos.bets.dashboard.dto;

/**
 * 프로세스 그래프의 막대 그래프 클릭시 조회 조건으로 사용되는 Dto
 */
public class ChartDetailCondDto {
    private String processCode = "";
    private String mon = "";
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
