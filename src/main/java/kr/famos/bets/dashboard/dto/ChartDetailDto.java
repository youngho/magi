package kr.famos.bets.dashboard.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * Scatter 그래프 Dto
 * ChartDetailCondDto 에 설정된 날짜 범위에 의해 조회된 retrieveChartDetail 의 return DTO 이다.
 * DashboardDto 에 포함되지 않고 별도로 컨트롤러에서 사용된다.
 */

public class ChartDetailDto {

    private float yieldMax;     // Scatter 그래프에서 최고 수율의 값을 가지고 있다. 그래프의 그릴 범위를 표시하기위한 값
    private float yieldMin;     // Scatter 그래프에서 최저 수율의 값을 가지고 있다. 그래프의 그릴 범위를 표시하기위한 값
    private float yieldLimit;   // Scatter 그래프에서 수율의 표시를 다르게 하기위한 기준값을 가지고 있다. 설정에서 가져오는 값.

    private List<ChartDetailItemDto> yieldItemList = new ArrayList<>();

    public float getYieldMax() {
        return yieldMax;
    }

    public void setYieldMax(float yieldMax) {
        this.yieldMax = yieldMax;
    }

    public float getYieldMin() {
        return yieldMin;
    }

    public void setYieldMin(float yieldMin) {
        this.yieldMin = yieldMin;
    }

    public List<ChartDetailItemDto> getYieldItemList() {
        return yieldItemList;
    }

    public void setYieldItemList(List<ChartDetailItemDto> yieldItemList) {
        this.yieldItemList = yieldItemList;
    }

    public float getYieldLimit() {
        return yieldLimit;
    }

    public void setYieldLimit(float yieldLimit) {
        this.yieldLimit = yieldLimit;
    }
}