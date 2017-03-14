package kr.famos.bets.dutmap.compodut.mapper;

import kr.famos.bets.dutmap.compodut.dto.CompoDutMapDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * Created by yhkim on 2017-03-10.
 */
@Mapper
public interface CompoDutMapMapper {
    public List<CompoDutMapDto> retrieveCompoDutMap(CompoDutMapDto compoDutMapDto);
    public List<Map<String, CompoDutMapDto>> retrieveCompoDutMapMap(CompoDutMapDto compoDutMapDto);
}
