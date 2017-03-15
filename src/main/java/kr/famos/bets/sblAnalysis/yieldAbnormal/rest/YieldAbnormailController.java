package kr.famos.bets.sblAnalysis.yieldAbnormal.rest;

import kr.famos.bets.sblAnalysis.yieldAbnormal.dto.YieldAbnormalDto;
import kr.famos.bets.sblAnalysis.yieldAbnormal.dto.YieldAbnormalResultDto;
import kr.famos.bets.sblAnalysis.yieldAbnormal.service.YieldAbnormalService;
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
public class YieldAbnormailController {

    private static final Logger logger = LoggerFactory.getLogger(YieldAbnormailController.class);

    @Autowired
    YieldAbnormalService yieldAbnormalService;

    @RequestMapping(value = "retrieveYieldAbnormal", method = RequestMethod.POST)
    public ResponseEntity<List<YieldAbnormalResultDto>> retrieveYieldAbnormal(@RequestBody YieldAbnormalDto yieldAbnormalDto) {
        return new ResponseEntity<List<YieldAbnormalResultDto>>(yieldAbnormalService.retrieveYieldAbnormal(yieldAbnormalDto), HttpStatus.OK);
    }

}
