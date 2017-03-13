package kr.famos.bets.sblAnalysis.testLotCancel.mapper;

import kr.famos.bets.sblAnalysis.testLotCancel.dto.TestLotCancelDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * Created by yhkim on 2017-03-13.
 */
@Mapper
public interface TestLotCancelMapper {

    public List<TestLotCancelDto> retrieveTestLotCancel(TestLotCancelDto testLotCancelDto);

    public List<Map<String, TestLotCancelDto>> retrieveTestLotCancelMap(TestLotCancelDto testLotCancelDto);
}
