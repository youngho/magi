package kr.famos.bets.dashboard.rest;

import kr.famos.bets.dashboard.dto.ChartDetailCondDto;
import kr.famos.bets.dashboard.dto.ChartDetailDto;
import kr.famos.bets.dashboard.dto.DashboardDto;
import kr.famos.bets.dashboard.service.DashboardService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@RestController
public class DashboardController {

    private static final Logger logger = LoggerFactory.getLogger(DashboardController.class);

    @Autowired
    DashboardService dashboardService;

    @RequestMapping(value = "/retrieveDashboard", method = RequestMethod.POST)
    public ResponseEntity<DashboardDto> retrieveDashboard(@RequestBody DashboardDto dashboardDto) {
        return new ResponseEntity<DashboardDto>(dashboardService.retrieveDashboard(dashboardDto), HttpStatus.OK);
    }


    @RequestMapping(value = "/retrieveChartDetail", method = RequestMethod.POST)
    public ResponseEntity<ChartDetailDto> retrieveChartDetail(@RequestBody ChartDetailCondDto chartDetailCondDto) {
        return new ResponseEntity<ChartDetailDto>(dashboardService.retrieveChartDetail(chartDetailCondDto), HttpStatus.OK);
    }
}
