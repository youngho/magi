package kr.famos.bets.efficiencyAnalysis.testTime.mapper;

import kr.famos.bets.efficiencyAnalysis.testTime.dto.TestTimeCondDto;
import kr.famos.bets.efficiencyAnalysis.testTime.dto.TestTimeResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * BETS-UI-0602
 * Test Time
 * mainProgramName 의 변경이력에 대한 CASI_BIN 의 testTime을 보여준다.
 * testTime = shotEndTime - shotStartTime으로 같은 프로그램으로 되어 있는 목록에서 Average, MinTime, MaxTime 의 testTime을 구해서 보여준다.
 */
@Mapper
public interface TestTimeMapper {
    public TestTimeResultDto retrieveTestTime(TestTimeCondDto testTimeCondDto);
    public List<TestTimeResultDto> retrieveTestTimeGroup(TestTimeCondDto testTimeCondDto);
}
