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

    public List<TestTimeResultDto> retrieveTestTime(TestTimeCondDto testTimeCondDto) {
        List<TestTimeResultDto> resultDtoList = new ArrayList<>();
        List<TestTimeResultDto> groupDtoList = new ArrayList<>();

        // mainProgramName 을 그룹별로 조회하여 AVG, MIN, MAX를 조회한다
        groupDtoList = testTimeMapper.retrieveTestTimeGroup(testTimeCondDto);

        // 조회한 그룹의 이름을 이용하여 partNumber, processCode, mainProgramName, testerModel, para 를 조회한다
        for(TestTimeResultDto list: groupDtoList){
            testTimeCondDto.setMainProgramName(list.getMainProgramName());
            TestTimeResultDto testTimeResultDto = testTimeMapper.retrieveTestTime(testTimeCondDto);
            // 조회된 testTimeResultDto 에 AVG, MIN, MAX를 groupDtoList에서 가져와 넣는다
            testTimeResultDto.setTestTimeAverage(list.getTestTimeAverage());
            testTimeResultDto.setTestTimeMin(list.getTestTimeMin());
            testTimeResultDto.setTestTimeMax(list.getTestTimeMax());

            // 완성된 testTimeResultDto 를 resultDtoList 에 삽입한다
            resultDtoList.add(testTimeResultDto);
        }
        return resultDtoList;
    }


}