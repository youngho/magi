package kr.famos.bets.yieldAnalysis.lotYield.rest;

import kr.famos.bets.yieldAnalysis.lotYield.dto.LotYieldDto;
import kr.famos.bets.yieldAnalysis.lotYield.mapper.LotYieldMapper;
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
 * Created by yhkim on 2017-02-21.
 */
@RestController
public class LotYieldController {
    private static final Logger logger = LoggerFactory.getLogger(LotYieldController.class);

    @Autowired
    private LotYieldMapper lotYieldMapper;

    @RequestMapping(value = "/retrieveLotYield", method = RequestMethod.POST)
    public ResponseEntity<List<LotYieldDto>> retrieveLotYield(@RequestBody LotYieldDto lotYield) {
        logger.debug("LotYieldController - retrieveLotYield 메소드");

        return new ResponseEntity<List<LotYieldDto>>(lotYieldMapper.retrieveLotYield(lotYield), HttpStatus.OK);
    }
}
