package kr.famos.bets.tdbiAnalysis.boardCompositeMap.rest;

import kr.famos.bets.tdbiAnalysis.boardCompositeMap.dto.BoardCompositeDto;
import kr.famos.bets.tdbiAnalysis.boardCompositeMap.service.BoardCompositeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@RestController
public class BoardCompositeController {

    private static final Logger logger = LoggerFactory.getLogger(BoardCompositeController.class);

    @Autowired
    BoardCompositeService boardCompositeService;

    @RequestMapping(value = "/retrieveBoardCompositeMap", method = RequestMethod.POST)
    public ResponseEntity<List<BoardCompositeDto>> retrieveBoardCompositeMap(@RequestBody BoardCompositeDto boardCompositeDto) {
        return new ResponseEntity<List<BoardCompositeDto>>(boardCompositeService.retrieveBoardCompositeMap(boardCompositeDto), HttpStatus.OK);
    }

}
