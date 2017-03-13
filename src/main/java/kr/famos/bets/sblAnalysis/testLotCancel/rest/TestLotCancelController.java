package kr.famos.bets.sblAnalysis.testLotCancel.rest;

import kr.famos.bets.sblAnalysis.testLotCancel.dto.TestLotCancelDto;
import kr.famos.bets.sblAnalysis.testLotCancel.service.TestLotCancelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yhkim on 2017-03-13.
 */
@RestController
public class TestLotCancelController {

    private static final Logger logger = LoggerFactory.getLogger(TestLotCancelController.class);

    @Autowired
    private TestLotCancelService testLotCancelService;

    @RequestMapping(value = "/retrieveTestLotCancel", method = RequestMethod.POST)
    public ResponseEntity<String> retrieveTestLotCancel(@RequestBody TestLotCancelDto testLotCancelDto) {
        logger.debug("SingleDutMapController - retrieveSingleDutMap 메소드");

        return new ResponseEntity<String>(testLotCancelService.retrieveTestLotCancel(testLotCancelDto), HttpStatus.OK);
    }
}
