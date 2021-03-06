package kr.famos.bets.dashboard.mapper;

import kr.famos.bets.dashboard.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Mapper
public interface DashboardMapper {

    public List<DashboardDto> retrieveDashboard(DashboardDto dashboardDto);

    public AxesChartDto retrieveAxesChartItem(AxesChartCondDto axesChartCondDto);
    public List<ChangeControlDto> retrieveChangControl();       // PROGRAM_REGISITER TABLE
    public List<LowYieldLotDto> retrieveLowYieldLot();
    public List<ChartDetailItemDto> retrieveChartDetail(ChartDetailCondDto chartDetailCondDto);
    public String retrieveWorkWeek(AxesChartCondDto axesChartCondDto);

}
