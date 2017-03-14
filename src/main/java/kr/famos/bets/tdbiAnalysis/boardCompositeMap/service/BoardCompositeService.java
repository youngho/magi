package kr.famos.bets.tdbiAnalysis.boardCompositeMap.service;


import kr.famos.bets.tdbiAnalysis.boardCompositeMap.dto.BoardCompositeDto;
import kr.famos.bets.tdbiAnalysis.boardCompositeMap.mapper.BoardCompositeMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class BoardCompositeService {

    private static final Logger logger = LoggerFactory.getLogger(BoardCompositeService.class);

    @Autowired
    BoardCompositeMapper boardCompositeMapper;

    public List<BoardCompositeDto> retrieveBoardCompositeMap(BoardCompositeDto boardCompositeDto) {
        return boardCompositeMapper.retrieveBoardCompositeMap(boardCompositeDto);
    }


}
