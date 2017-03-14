package kr.famos.bets.tdbiAnalysis.boardSerialMap.mapper;


import kr.famos.bets.tdbiAnalysis.boardSerialMap.dto.BoardSerialMapDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Mapper
public interface BoardSerialMapMapper {

    public List<BoardSerialMapDto> retrieveBoardSerialMap(BoardSerialMapDto boardSerialMapDto);


}
