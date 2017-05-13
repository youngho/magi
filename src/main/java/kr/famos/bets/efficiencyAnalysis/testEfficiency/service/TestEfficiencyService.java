package kr.famos.bets.efficiencyAnalysis.testEfficiency.service;

import kr.famos.bets.dutmap.singledut.service.SingleDutMapService;
import kr.famos.bets.efficiencyAnalysis.testEfficiency.dto.TestEfficiencyCondDto;
import kr.famos.bets.efficiencyAnalysis.testEfficiency.mapper.TestEfficiencyMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * BETS-UI-0601
 * Test Efficiency
 */
@Service
public class TestEfficiencyService {
    private static final Logger logger = LoggerFactory.getLogger(SingleDutMapService.class);
    @Autowired
    TestEfficiencyMapper testEfficiencyMapper;

    public String retrieveTestEfficiency(TestEfficiencyCondDto testEfficiencyCondDto) {
        String temp = "";
        return temp;
    }


}