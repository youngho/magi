package kr.famos.bets.dashboard.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 * 사용자별 Setting 값에 따른 ProcessCode 종류별로 Chart를 표현하기 위해
 * chart는 List구조로 가져가고
 * 아래 표형식의 데이터는 DTO 형식으로 구성한다.
 */
public class DashboardDto {
    private List<AxesChartDto> chart = new ArrayList<>();
    private List<ChangeControlDto> changeControl = new ArrayList<>();
    private List<LowYieldLotDto> lowYieldLot = new ArrayList<>();
    private OcapDto ocap = new OcapDto();

    public List<AxesChartDto> getChart() {
        return chart;
    }

    public void setChart(List<AxesChartDto> chart) {
        this.chart = chart;
    }

    public List<ChangeControlDto> getChangeControl() {
        return changeControl;
    }

    public void setChangeControl(List<ChangeControlDto> changeControl) {
        this.changeControl = changeControl;
    }

    public List<LowYieldLotDto> getLowYieldLot() {
        return lowYieldLot;
    }

    public void setLowYieldLot(List<LowYieldLotDto> lowYieldLot) {
        this.lowYieldLot = lowYieldLot;
    }

    public OcapDto getOcap() {
        return ocap;
    }

    public void setOcap(OcapDto ocap) {
        this.ocap = ocap;
    }
}