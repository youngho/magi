package kr.famos.bets.efficiencyAnalysis.testTime.service;

import com.google.gson.Gson;
import kr.famos.bets.dutmap.singledut.service.SingleDutMapService;
import kr.famos.bets.efficiencyAnalysis.testTime.dto.TestTimeResultDto;
import kr.famos.bets.efficiencyAnalysis.testTime.dto.TestTimeCondDto;
import kr.famos.bets.efficiencyAnalysis.testTime.mapper.TestTimeMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.*;

/**
 * BETS-UI-0602
 * Test Time
 * mainProgramName 의 변경이력에 대한 CASI_BIN 의 testTime을 보여준다.
 * testTime = shotEndTime - shotStartTime으로 같은 프로그램으로 되어 있는 목록에서 Average, MinTime, MaxTime 의 testTime을 구해서 보여준다.
 */
@Service
public class TestTimeService {
    private static final Logger logger = LoggerFactory.getLogger(SingleDutMapService.class);
    @Autowired
    TestTimeMapper testTimeMapper;

    public String retrieveTestTime(TestTimeCondDto testTimeCondDto) {
        String temp = "";
        return temp;
    }


}