package kr.famos.bets.dashboard.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
public class DashboardDto {
    private List<AxesChartDto> chart = new ArrayList<>();

    public List<AxesChartDto> getChart() {
        return chart;
    }

    public void setChart(List<AxesChartDto> chart) {
        this.chart = chart;
    }
}