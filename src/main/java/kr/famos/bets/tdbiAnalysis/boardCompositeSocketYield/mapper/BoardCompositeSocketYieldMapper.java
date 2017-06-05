package kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.mapper;

import kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.dto.BoardCompositeSocketYieldCondDto;
import kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.dto.BoardCompositeSocketYieldResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * BETS-UI-0507 : BoardCompositeSocketYield
 * 단일 보드의 소켓별 수율을 보드 형태로 보여준다.
 */
@Mapper
public interface BoardCompositeSocketYieldMapper {

    public List<BoardCompositeSocketYieldResultDto> retrieveBoardCompositeSocketYield(BoardCompositeSocketYieldCondDto boardCompositeSocketYieldCondDto);


}
