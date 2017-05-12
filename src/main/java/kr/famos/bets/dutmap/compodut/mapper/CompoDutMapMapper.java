package kr.famos.bets.dutmap.compodut.mapper;
/**
 ** BETS-UI-0302
 ** Composite DUT Map
 ** CASI_BIN 테이블의 DUT_MAIN_BIN 에 들어 있는 DUT의 정보를 BIN별로 분류하여 PASS BIN의 비율을 보여준다
 */

import kr.famos.bets.dutmap.compodut.dto.CompoDutMapDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CompoDutMapMapper {
    public List<CompoDutMapDto> retrieveCompoDutMap(CompoDutMapDto compoDutMapDto);
    //public List<Map<String, CompoDutMapDto>> retrieveCompoDutMapMap(CompoDutMapDto compoDutMapDto);
}
