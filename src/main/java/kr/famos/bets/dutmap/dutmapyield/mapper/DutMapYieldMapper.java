package kr.famos.bets.dutmap.dutmapyield.mapper;

import kr.famos.bets.dutmap.dutmapyield.dto.DutMapYieldDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * Created by yhkim on 2017-03-10.
 */
@Mapper
public interface DutMapYieldMapper {
    public List<DutMapYieldDto> retrieveDutMapYield(DutMapYieldDto dutMapYieldDto);
}
