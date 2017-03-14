package kr.famos.bets.tdbiAnalysis.boardCompositeMap.mapper;

import kr.famos.bets.tdbiAnalysis.boardCompositeMap.dto.BoardCompositeDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Mapper
public interface BoardCompositeMapper {

    public List<BoardCompositeDto> retrieveBoardCompositeMap(BoardCompositeDto boardCompositeDto);


}
