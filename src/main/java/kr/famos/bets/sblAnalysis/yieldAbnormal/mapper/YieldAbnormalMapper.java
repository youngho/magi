package kr.famos.bets.sblAnalysis.yieldAbnormal.mapper;

import kr.famos.bets.sblAnalysis.yieldAbnormal.dto.YieldAbnormalDto;
import kr.famos.bets.sblAnalysis.yieldAbnormal.dto.YieldAbnormalResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Mapper
public interface YieldAbnormalMapper {

    public List<YieldAbnormalResultDto> retrieveYieldAbnormal(YieldAbnormalDto yieldAbnormalDto);


}
