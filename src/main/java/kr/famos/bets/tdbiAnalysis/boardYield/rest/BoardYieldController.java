package kr.famos.bets.tdbiAnalysis.boardYield.rest;

import kr.famos.bets.tdbiAnalysis.boardYield.dto.BoardYieldDto;
import kr.famos.bets.tdbiAnalysis.boardYield.service.BoardYieldService;
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
public class BoardYieldController {

    private static final Logger logger = LoggerFactory.getLogger(BoardYieldController.class);

    @Autowired
    BoardYieldService boardYieldService;

    @RequestMapping(value = "/retrieveBoardYield", method = RequestMethod.POST)
    public ResponseEntity<List<?>> retrieveBoardYield(@RequestBody BoardYieldDto boardYieldDto) {
        return new ResponseEntity<List<?>>(boardYieldService.retrieveBoardYield(boardYieldDto), HttpStatus.OK);
    }

}
