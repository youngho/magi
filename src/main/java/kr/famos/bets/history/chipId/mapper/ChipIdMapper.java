package kr.famos.bets.history.chipId.mapper;

import kr.famos.bets.history.chipId.dto.ChipIdCondDto;
import kr.famos.bets.history.chipId.dto.ChipIdResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Mapper
public interface ChipIdMapper {

    public List<ChipIdResultDto> retrieveChipId(ChipIdCondDto chipIdCondDto);
}
