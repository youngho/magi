package kr.famos.bets.tdbiAnalysis.slotYield.mapper;

import kr.famos.bets.tdbiAnalysis.slotYield.dto.SlotYieldDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Mapper
public interface SlotYieldMapper {

    public List<SlotYieldDto> retrieveSlotYield(SlotYieldDto slotYieldDto);


}
