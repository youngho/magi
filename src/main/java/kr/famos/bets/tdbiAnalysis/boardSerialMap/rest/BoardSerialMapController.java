package kr.famos.bets.tdbiAnalysis.boardSerialMap.rest;


import kr.famos.bets.tdbiAnalysis.boardSerialMap.dto.BoardSerialMapDto;
import kr.famos.bets.tdbiAnalysis.boardSerialMap.service.BoardSerialMapService;
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
public class BoardSerialMapController {

    private static final Logger logger = LoggerFactory.getLogger(BoardSerialMapController.class);

    @Autowired
    BoardSerialMapService boardSerialMapService;

    @RequestMapping(value = "/retrieveBoardSerialMap", method = RequestMethod.POST)
    public ResponseEntity<List<BoardSerialMapDto>> retrieveBoardSerialMap(@RequestBody BoardSerialMapDto boardSerialMapDto) {
        return new ResponseEntity<List<BoardSerialMapDto>>(boardSerialMapService.retrieveBoardSerialMap(boardSerialMapDto), HttpStatus.OK);
    }

}
