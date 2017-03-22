package kr.famos.bets.dashboard.mapper;

import kr.famos.bets.dashboard.dto.AxesChartCondDto;
import kr.famos.bets.dashboard.dto.AxesChartDto;
import kr.famos.bets.dashboard.dto.DashboardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Mapper
public interface DashboardMapper {

    public List<DashboardDto> retrieveDashboard(DashboardDto dashboardDto);

    public AxesChartDto retrieveAxesChartItem(AxesChartCondDto axesChartCondDto);


}
