package kr.famos.bets.dashboard.dto;

/**
 * Created by yhkim on 2017-03-22.
 */
public class AxesChartCondDto {

    private String processCode = "";    // 공정코드
    private String endTimeStart = "";
    private String endTimeEnd = "";
    private String workWeek = "";       // 데이터 생성 워크위크

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getEndTimeStart() {
        return endTimeStart;
    }

    public void setEndTimeStart(String endTimeStart) {
        this.endTimeStart = endTimeStart;
    }

    public String getEndTimeEnd() {
        return endTimeEnd;
    }

    public void setEndTimeEnd(String endTimeEnd) {
        this.endTimeEnd = endTimeEnd;
    }

    public String getWorkWeek() {
        return workWeek;
    }

    public void setWorkWeek(String workWeek) {
        this.workWeek = workWeek;
    }
}
