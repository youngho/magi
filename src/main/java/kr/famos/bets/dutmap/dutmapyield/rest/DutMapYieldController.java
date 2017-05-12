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
 * BETS-UI-0303
 * DUT Map Yiled
 * BIN Selection 이 정해지지 않을 경우에는 PASS BIN의 비율을 보여준다
 * BIN Selection 에서 선택한 BIN의 비율을 보여준다
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
