package kr.famos.bets.dutmap.compodut.rest;
/**
 ** BETS-UI-0302
 ** Composite DUT Map
 ** CASI_BIN 테이블의 DUT_MAIN_BIN 에 들어 있는 DUT의 정보를 BIN별로 분류하여 PASS BIN의 비율을 보여준다
 */

import kr.famos.bets.dutmap.compodut.dto.CompoDutMapDto;
import kr.famos.bets.dutmap.compodut.service.CompoDutMapService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompoDutMapController {
    private static final Logger logger = LoggerFactory.getLogger(CompoDutMapController.class);

    @Autowired
    private CompoDutMapService compoDutMapService;

    @RequestMapping(value = "/retrieveCompoDutMap", method = RequestMethod.POST)
    public String retrieveCompoDutMap(@RequestBody CompoDutMapDto compoDutMapDto) {
        logger.debug("CompoDutMapController - retrieveCompoDutMap 메소드");
        String list = compoDutMapService.retrieveCompoDutMap(compoDutMapDto);
        return list;
    }
}
