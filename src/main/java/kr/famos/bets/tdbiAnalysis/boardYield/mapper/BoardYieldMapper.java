package kr.famos.bets.tdbiAnalysis.boardYield.mapper;


import kr.famos.bets.tdbiAnalysis.boardYield.dto.BoardYieldDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Mapper
public interface BoardYieldMapper {

    public List<BoardYieldDto> retrieveBoardYield(BoardYieldDto boardCompositeDto);


}
