package kr.famos.bets.history.lcRevision.rest;

import kr.famos.bets.history.lcRevision.dto.LcRevisionDto;
import kr.famos.bets.history.lcRevision.service.LcRevisionService;
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
 * Created by yhkim on 2017-03-11.
 */
@RestController
public class LcRevisionController {
    private static final Logger logger = LoggerFactory.getLogger(LcRevisionController.class);

    @Autowired
    LcRevisionService lcRevisionService;

    @RequestMapping(value = "/retrieveLcRevision", method = RequestMethod.POST)
    public ResponseEntity<List<LcRevisionDto>> retrieveLcRevision(@RequestBody LcRevisionDto lcRevisionDto) {

        return new ResponseEntity<List<LcRevisionDto>>(lcRevisionService.retrieveLcRevision(lcRevisionDto), HttpStatus.OK);
    }

}
