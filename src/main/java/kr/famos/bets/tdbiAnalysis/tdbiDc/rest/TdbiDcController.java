package kr.famos.bets.tdbiAnalysis.tdbiDc.rest;

import kr.famos.bets.tdbiAnalysis.tdbiDc.dto.TdbiDcCondDto;
import kr.famos.bets.tdbiAnalysis.tdbiDc.dto.TdbiDcResultDto;
import kr.famos.bets.tdbiAnalysis.tdbiDc.service.TdbiDcService;
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
 * BETS-UI-0506 : TDBI DC
 */
@RestController
public class TdbiDcController {

    private static final Logger logger = LoggerFactory.getLogger(TdbiDcController.class);

    @Autowired
    TdbiDcService tdbiDcService;

    @RequestMapping(value = "/retrieveTdbiDc", method = RequestMethod.POST)
    public ResponseEntity<List<TdbiDcResultDto>> retrieveTdbiDc(@RequestBody TdbiDcCondDto dataSummaryDto) {
        return new ResponseEntity<List<TdbiDcResultDto>>(tdbiDcService.retrieveTdbiDc(dataSummaryDto), HttpStatus.OK);
    }

}
