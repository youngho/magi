package kr.famos.bets.yieldAnalysis.ngbin.rest;

import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinCondDto;
import kr.famos.bets.yieldAnalysis.ngbin.service.NgBinService;
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
 * Created by yhkim on 2017-03-08.
 */
@RestController
public class NgBinController {
    private static final Logger logger = LoggerFactory.getLogger(NgBinController.class);

    @Autowired
    private NgBinService ngBinService;

    @RequestMapping(value = "/retrieveNgBinJson", method = RequestMethod.POST)
    public ResponseEntity<List<?>> retrieveSubBinJson(@RequestBody NgBinCondDto ngBinCondDto) {
        logger.debug("NgBinController - retireveNgBin 메소드");

        return new ResponseEntity<List<?>>(ngBinService.retrieveNgBinMap(ngBinCondDto), HttpStatus.OK);
    }
}
