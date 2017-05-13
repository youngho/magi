package kr.famos.bets.efficiencyAnalysis.testEfficiency.mapper;

import kr.famos.bets.efficiencyAnalysis.testEfficiency.dto.TestEfficiencyCondDto;
import kr.famos.bets.efficiencyAnalysis.testEfficiency.dto.TestEfficiencyResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * BETS-UI-0601
 * Test Efficiency
 */
@Mapper
public interface TestEfficiencyMapper {
    public List<TestEfficiencyResultDto> retrieveTestEfficiency(TestEfficiencyCondDto testEfficiencyCondDto);
}
