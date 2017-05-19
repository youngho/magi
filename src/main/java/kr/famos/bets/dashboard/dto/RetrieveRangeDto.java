package kr.famos.bets.dashboard.dto;

/**
 * Created by x on 2017. 5. 18..
 */
public class RetrieveRangeDto {
    String startDate = "";
    String endDate = "";

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
