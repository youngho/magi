package kr.famos.bets.dashboard.service;

import kr.famos.bets.dashboard.dto.AxesChartCondDto;
import kr.famos.bets.dashboard.dto.AxesChartDto;
import kr.famos.bets.dashboard.dto.DashboardDto;
import kr.famos.bets.dashboard.mapper.DashboardMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class DashboardService {

    private static final Logger logger = LoggerFactory.getLogger(DashboardService.class);

    @Autowired
    DashboardMapper dashboardMapper;

//    public DashboardDto retrieveDashboard(DashboardDto dashboardDto) {
    public DashboardDto retrieveDashboard(DashboardDto dashboardDto) {

        DashboardDto returnDto = new DashboardDto();
        AxesChartDto chartItemDto = new AxesChartDto();

        //COM_SETTING 에서 해당 사용자의 설정 값을 가지고 Dashboard를 보여준다.
        AxesChartCondDto condDto = new AxesChartCondDto();
        condDto.setProcessCode("T0710");
        condDto.setEndTimeStart("20161200000000");  //3개월 데이터 셋팅
        condDto.setEndTimeEnd("20170399999999");

        chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
        chartItemDto.setMon("3M");
        logger.debug("총개수 : " + chartItemDto.getTav());
        logger.debug("YIELD : " + chartItemDto.getPrec());
        returnDto.getChart().add(chartItemDto);

        condDto.setEndTimeStart("20170302000000");  //2개월 데이터 셋팅
        condDto.setEndTimeEnd("20170399999999");
        chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
        chartItemDto.setMon("2M");
        returnDto.getChart().add(chartItemDto);

        condDto.setEndTimeStart("20170302000000");  //1개월 데이터 셋팅
        condDto.setEndTimeEnd("20170399999999");
        chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
        chartItemDto.setMon("1M");
        returnDto.getChart().add(chartItemDto);

        condDto.setEndTimeStart("20170302000000");  //3주전 데이터 셋팅
        condDto.setEndTimeEnd("20170317999999");
        chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
        chartItemDto.setMon("3W");
        returnDto.getChart().add(chartItemDto);

        condDto.setEndTimeStart("20170302000000");  //2주전 데이터 셋팅
        condDto.setEndTimeEnd("20170399999999");
        chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
        chartItemDto.setMon("2W");
        returnDto.getChart().add(chartItemDto);

        condDto.setEndTimeStart("20170307000000");  //1주전 데이터 셋팅
        condDto.setEndTimeEnd("20170315999999");
        chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
        chartItemDto.setMon("1W");
        returnDto.getChart().add(chartItemDto);

        condDto.setEndTimeStart("20170302000000");  //3일전 데이터 셋팅
        condDto.setEndTimeEnd("20170399999999");
        chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
        chartItemDto.setMon("3D");
        returnDto.getChart().add(chartItemDto);

        condDto.setEndTimeStart("20170321000000");  //2일전 데이터 셋팅
        condDto.setEndTimeEnd("20170322999999");
        chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
        chartItemDto.setMon("2D");
        returnDto.getChart().add(chartItemDto);

        condDto.setEndTimeStart("20170320000000");  //1일전 데이터 셋팅
        condDto.setEndTimeEnd("20170321999999");
        chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
        chartItemDto.setMon("1D");
        returnDto.getChart().add(chartItemDto);

        return returnDto;
    }


}
