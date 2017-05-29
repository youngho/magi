package kr.famos.bets.history.chipId.rest;

import kr.famos.bets.history.chipId.dto.ChipIdCondDto;
import kr.famos.bets.history.chipId.dto.ChipIdResultDto;
import kr.famos.bets.history.chipId.service.ChipIdService;
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
public class ChipIdController {
    private static final Logger logger = LoggerFactory.getLogger(ChipIdController.class);

    @Autowired
    ChipIdService chipIdService;

    @RequestMapping(value = "/retrieveChipId", method = RequestMethod.POST)
    public ResponseEntity<List<ChipIdResultDto>> retrieveChipId(@RequestBody ChipIdCondDto chipIdCondDto) {

        return new ResponseEntity<List<ChipIdResultDto>>(chipIdService.retrieveChipId(chipIdCondDto), HttpStatus.OK);
    }

}
