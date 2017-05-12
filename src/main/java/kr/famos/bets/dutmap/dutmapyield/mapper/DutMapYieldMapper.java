package kr.famos.bets.dutmap.dutmapyield.mapper;

import kr.famos.bets.dutmap.dutmapyield.dto.DutMapYieldDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * BETS-UI-0303
 * DUT Map Yiled
 * BIN Selection 이 정해지지 않을 경우에는 PASS BIN의 비율을 보여준다
 * BIN Selection 에서 선택한 BIN의 비율을 보여준다
 */
@Mapper
public interface DutMapYieldMapper {
    public List<DutMapYieldDto> retrieveDutMapYield(DutMapYieldDto dutMapYieldDto);
}
