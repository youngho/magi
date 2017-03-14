package kr.famos.bets.tdbiAnalysis.boardYield.service;


import kr.famos.bets.tdbiAnalysis.boardYield.dto.BoardYieldDto;
import kr.famos.bets.tdbiAnalysis.boardYield.mapper.BoardYieldMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class BoardYieldService {

    private static final Logger logger = LoggerFactory.getLogger(BoardYieldService.class);

    @Autowired
    BoardYieldMapper boardYieldMapper;

    public List<BoardYieldDto> retrieveBoardYield(BoardYieldDto boardYieldDto) {
        return boardYieldMapper.retrieveBoardYield(boardYieldDto);
    }


}
