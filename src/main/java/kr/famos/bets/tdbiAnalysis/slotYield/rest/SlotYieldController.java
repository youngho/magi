package kr.famos.bets.tdbiAnalysis.slotYield.rest;

import kr.famos.bets.tdbiAnalysis.slotYield.dto.SlotYieldDto;
import kr.famos.bets.tdbiAnalysis.slotYield.service.SlotYieldService;
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
public class SlotYieldController {

    private static final Logger logger = LoggerFactory.getLogger(SlotYieldController.class);

    @Autowired
    SlotYieldService slotYieldService;

    @RequestMapping(value = "/retrieveSlotYield", method = RequestMethod.POST)
    public ResponseEntity<List<?>> retrieveSlotYield(@RequestBody SlotYieldDto slotYieldDto) {
        return new ResponseEntity<List<?>>(slotYieldService.retrieveSlotYield(slotYieldDto), HttpStatus.OK);
    }

}
