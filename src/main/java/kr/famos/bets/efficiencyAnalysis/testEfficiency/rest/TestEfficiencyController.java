package kr.famos.bets.efficiencyAnalysis.testEfficiency.rest;

import kr.famos.bets.efficiencyAnalysis.testEfficiency.dto.EfficiencyUsingLotDto;
import kr.famos.bets.efficiencyAnalysis.testEfficiency.dto.TestEfficiencyCondDto;
import kr.famos.bets.efficiencyAnalysis.testEfficiency.dto.TestEfficiencyResultDto;
import kr.famos.bets.efficiencyAnalysis.testEfficiency.service.TestEfficiencyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

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
    public ResponseEntity<List<TestEfficiencyResultDto>> retrieveTestEfficiency(@RequestBody TestEfficiencyCondDto testEfficiencyCondDto) {
        logger.debug("TestTimeController - retrieveTestEfficiency 메소드");
        // 단일행으로 넘어오는 결과를 표 wijmo 표 형태로 보여주기 위해 List 형태로 변환하여 return
        TestEfficiencyResultDto testEfficiencyResultDto = testEfficiencyService.retrieveTestEfficiency(testEfficiencyCondDto);
        List<TestEfficiencyResultDto> dtos = new ArrayList<>();
        dtos.add(testEfficiencyResultDto);
        return new ResponseEntity<List<TestEfficiencyResultDto>>(dtos , HttpStatus.OK);
    }

    /**
     * retrieveTestEfficiency 에서 사용되는 Lot 목록을 조회하는 컨트롤러 이다.
     * 위에서 하나의 DTO로 묶지 않은 이유는 조회항목의 변경이 예샹되기 때문이다.
     * @param testEfficiencyCondDto
     * @return
     */
    @RequestMapping(value = "/retrieveUsingLot", method = RequestMethod.POST)
    public ResponseEntity<List<EfficiencyUsingLotDto>> retrieveUsingLot(@RequestBody TestEfficiencyCondDto testEfficiencyCondDto) {
        return new ResponseEntity<List<EfficiencyUsingLotDto>>(testEfficiencyService.retrieveUsingLot(testEfficiencyCondDto) , HttpStatus.OK);
    }

}
