package kr.famos.bets.efficiencyAnalysis.testTime.rest;

import kr.famos.bets.efficiencyAnalysis.testTime.dto.TestTimeCondDto;
import kr.famos.bets.efficiencyAnalysis.testTime.service.TestTimeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * BETS-UI-0602
 * Test Time
 * mainProgramName 의 변경이력에 대한 CASI_BIN 의 testTime을 보여준다.
 * testTime = shotEndTime - shotStartTime으로 같은 프로그램으로 되어 있는 목록에서 Average, MinTime, MaxTime 의 testTime을 구해서 보여준다.
 */
@RestController
public class TestTimeController {
    private static final Logger logger = LoggerFactory.getLogger(TestTimeController.class);

    @Autowired
    private TestTimeService testTimeService;

    @RequestMapping(value = "/retrieveTestTime", method = RequestMethod.POST)
    public String retrieveTestTime(@RequestBody TestTimeCondDto testTimeCondDto) {
        logger.debug("TestTimeController - retrieveTestTime 메소드");
        String list = testTimeService.retrieveTestTime(testTimeCondDto);
        return list;
    }
}
