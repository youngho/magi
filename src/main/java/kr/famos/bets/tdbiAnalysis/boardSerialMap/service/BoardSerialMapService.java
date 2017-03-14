package kr.famos.bets.tdbiAnalysis.boardSerialMap.service;




import kr.famos.bets.tdbiAnalysis.boardSerialMap.dto.BoardSerialMapDto;
import kr.famos.bets.tdbiAnalysis.boardSerialMap.mapper.BoardSerialMapMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class BoardSerialMapService {

    private static final Logger logger = LoggerFactory.getLogger(BoardSerialMapService.class);

    @Autowired
    BoardSerialMapMapper boardSerialMapMapper;

    public List<BoardSerialMapDto> retrieveBoardSerialMap(BoardSerialMapDto boardSerialMapDto){
        return boardSerialMapMapper.retrieveBoardSerialMap(boardSerialMapDto);
    }


}
