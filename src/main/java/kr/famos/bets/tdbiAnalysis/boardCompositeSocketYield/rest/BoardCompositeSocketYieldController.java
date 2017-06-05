package kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.rest;

import kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.dto.BoardCompositeSocketYieldCondDto;
import kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.service.BoardCompositeSocketYieldService;
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

@RestController
public class BoardCompositeSocketYieldController {

    private static final Logger logger = LoggerFactory.getLogger(BoardCompositeSocketYieldController.class);

    @Autowired
    BoardCompositeSocketYieldService boardCompositeSocketYieldService;

    /**
     * 리턴형식이 DTO가 아님
     * Service에서 MAP형식으로 만든다
     * @param boardCompositeSocketYieldCondDto
     * @return Map<String,String>
     */
    @RequestMapping(value = "/retrieveBoardCompositeSocketYield", method = RequestMethod.POST)
    public ResponseEntity<List<?>> retrieveBoardCompositeSocketYield(@RequestBody BoardCompositeSocketYieldCondDto boardCompositeSocketYieldCondDto) {
        return new ResponseEntity<List<?>>(boardCompositeSocketYieldService.retrieveBoardCompositeSocketYield(boardCompositeSocketYieldCondDto), HttpStatus.OK);
    }

}
