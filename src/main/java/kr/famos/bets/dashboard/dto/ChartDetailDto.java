package kr.famos.bets.dashboard.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-27.
 */
public class ChartDetailDto {

    private float yieldMax;
    private float yieldMin;

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
}