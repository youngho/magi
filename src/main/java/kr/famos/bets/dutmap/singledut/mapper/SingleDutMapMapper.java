package kr.famos.bets.dutmap.singledut.mapper;

import kr.famos.bets.dutmap.singledut.dto.SingleDutMapDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * Created by yhkim on 2017-03-09.
 */
@Mapper
public interface SingleDutMapMapper {
    public List<SingleDutMapDto> retrieveSingleDutMap(SingleDutMapDto singleDutMapDto);
    public List<Map<String,SingleDutMapDto>> retrieveSingleDutMapMap(SingleDutMapDto singleDutMapDto);
}
