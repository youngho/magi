package kr.famos.bets.efficiencyAnalysis.testEfficiency.mapper;

import kr.famos.bets.efficiencyAnalysis.testEfficiency.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * BETS-UI-0601
 * Test Efficiency
 */
@Mapper
public interface TestEfficiencyMapper {
    public List<MainTimeResultDto> retrieveTestEfficiency(TestEfficiencyCondDto testEfficiencyCondDto);

    // 테스트넘버, 프로세스코드, LOT_ID 로 조회하여 TEST_COUTER, TEST_FLOW 로 GROUP BY 하여 다중행을 리턴받는다
    public List<CasiTimeResultDto> retrieveCasiTime(CasiTimeCondDto casiTimeCondDto);
}
