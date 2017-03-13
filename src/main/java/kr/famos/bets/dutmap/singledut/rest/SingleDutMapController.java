package kr.famos.bets.dutmap.singledut.rest;

import kr.famos.bets.dutmap.singledut.dto.SingleDutMapDto;
import kr.famos.bets.dutmap.singledut.service.SingleDutMapService;
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
 * Created by yhkim on 2017-03-09.
 */
@RestController
public class SingleDutMapController {
    private static final Logger logger = LoggerFactory.getLogger(SingleDutMapController.class);

    @Autowired
    private SingleDutMapService singleDutMapService;

    @RequestMapping(value = "/retrieveSingleDutMap", method = RequestMethod.POST)
    public ResponseEntity<String> retrieveSingleDutMap(@RequestBody SingleDutMapDto singleDutMapDto) {
        logger.debug("SingleDutMapController - retrieveSingleDutMap 메소드");

        return new ResponseEntity<String>(singleDutMapService.retrieveSingleDutMap(singleDutMapDto), HttpStatus.OK);
    }
}
