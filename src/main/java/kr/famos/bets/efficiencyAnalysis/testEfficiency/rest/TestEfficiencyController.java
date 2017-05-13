package kr.famos.bets.efficiencyAnalysis.testEfficiency.rest;

import kr.famos.bets.efficiencyAnalysis.testEfficiency.dto.TestEfficiencyCondDto;
import kr.famos.bets.efficiencyAnalysis.testEfficiency.service.TestEfficiencyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * BETS-UI-0601
 * Test Efficiency
 */
@RestController
public class TestEfficiencyController {
    private static final Logger logger = LoggerFactory.getLogger(TestEfficiencyController.class);

    @Autowired
    private TestEfficiencyService testEfficiencyService;

    @RequestMapping(value = "/retrieveTestEfficiency", method = RequestMethod.POST)
    public String retrieveTestEfficiency(@RequestBody TestEfficiencyCondDto testEfficiencyCondDto) {
        logger.debug("TestTimeController - retrieveTestEfficiency 메소드");
        String list = testEfficiencyService.retrieveTestEfficiency(testEfficiencyCondDto);
        return list;
    }
}
