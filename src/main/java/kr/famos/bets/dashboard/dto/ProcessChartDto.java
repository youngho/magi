package kr.famos.bets.dashboard.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-27.
 */
public class ProcessChartDto {

    private String processCode = "";    // 공정코드

    private List<AxesChartDto> chart = new ArrayList<>();

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public List<AxesChartDto> getChart() {
        return chart;
    }

    public void setChart(List<AxesChartDto> chart) {
        this.chart = chart;
    }
}
