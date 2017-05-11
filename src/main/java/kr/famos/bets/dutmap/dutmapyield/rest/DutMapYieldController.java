package kr.famos.bets.dutmap.dutmapyield.rest;

import kr.famos.bets.dutmap.dutmapyield.dto.DutMapYieldDto;
import kr.famos.bets.dutmap.dutmapyield.service.DutMapYieldService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yhkim on 2017-03-10.
 */
@RestController
public class DutMapYieldController {
    private static final Logger logger = LoggerFactory.getLogger(DutMapYieldController.class);

    @Autowired
    private DutMapYieldService dutMapYieldService;

    @RequestMapping(value = "/retrieveDutMapYield", method = RequestMethod.POST)
    public String retrieveCompoDutMap(@RequestBody DutMapYieldDto dutMapYieldDto) {
        logger.debug("DutMapYieldController - retrieveDutMapYield 메소드");
        String list = dutMapYieldService.retrieveCompoDutMap(dutMapYieldDto);
        return list;
    }
}
