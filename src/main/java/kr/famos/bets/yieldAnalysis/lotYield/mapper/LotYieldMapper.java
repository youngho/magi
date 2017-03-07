package kr.famos.bets.yieldAnalysis.lotYield.mapper;

import kr.famos.bets.yieldAnalysis.lotYield.dto.LotYieldDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Mapper
public interface LotYieldMapper {
    public List<LotYieldDto> retrieveLotYield(LotYieldDto lotYieldDto);
}
