package kr.famos.bets.tdbiAnalysis.dataSummary.rest;

import kr.famos.bets.tdbiAnalysis.dataSummary.dto.DataSummaryDto;
import kr.famos.bets.tdbiAnalysis.dataSummary.service.DataSummaryService;
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
public class DataSummaryController {

    private static final Logger logger = LoggerFactory.getLogger(DataSummaryController.class);

    @Autowired
    DataSummaryService dataSummaryService;

    @RequestMapping(value = "/retrieveDataSummary", method = RequestMethod.POST)
    public ResponseEntity<List<DataSummaryDto>> retrieveDataSummary(@RequestBody DataSummaryDto dataSummaryDto) {
        return new ResponseEntity<List<DataSummaryDto>>(dataSummaryService.retrieveDataSummary(dataSummaryDto), HttpStatus.OK);
    }

}
