package kr.famos.bets.tdbiAnalysis.tdbiDc.mapper;

import kr.famos.bets.tdbiAnalysis.tdbiDc.dto.TdbiDcCondDto;
import kr.famos.bets.tdbiAnalysis.tdbiDc.dto.TdbiDcResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * BETS-UI-0506 : TDBI DC
 */
@Mapper
public interface TdbiDcMapper {

    public List<TdbiDcResultDto> retrieveTdbiDc(TdbiDcCondDto tdbiDcCondDto);


}
