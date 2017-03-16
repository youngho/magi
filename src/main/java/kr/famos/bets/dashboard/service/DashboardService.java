package kr.famos.bets.dashboard.service;

import kr.famos.bets.dashboard.dto.DashboardDto;
import kr.famos.bets.dashboard.mapper.DashboardMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class DashboardService {

    private static final Logger logger = LoggerFactory.getLogger(DashboardService.class);

    @Autowired
    DashboardMapper dashboardMapper;

    public List<DashboardDto> retrieveDashboard(DashboardDto dashboardDto) {


        return dashboardMapper.retrieveDashboard(dashboardDto);
    }


}
