package kr.famos.bets.basisInformation.badBlock.rest;

import kr.famos.bets.basisInformation.badBlock.dto.BadBlockDto;
import kr.famos.bets.basisInformation.badBlock.service.BadBlockService;
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
 * Created by yhkim on 2017-02-27.
 */
@RestController
public class BadBlockController {
    private static final Logger logger = LoggerFactory.getLogger(BadBlockController.class);

    @Autowired
    private BadBlockService badBlockService;

    @RequestMapping(value = "retrieveBadBlock", method = RequestMethod.POST)
    public ResponseEntity<List<BadBlockDto>> retrieveBadBlock(@RequestBody BadBlockDto badBlockDto) {
        return new ResponseEntity<List<BadBlockDto>>(badBlockService.retrieveBadBlock(badBlockDto), HttpStatus.OK);
    }

    @RequestMapping(value = "retrieveBadBlockByKey", method = RequestMethod.POST)
    public ResponseEntity<BadBlockDto> retrieveBadBlockByKey(@RequestBody BadBlockDto badBlockDto) {
        return new ResponseEntity<BadBlockDto>(badBlockService.retrieveBadBlockByKey(badBlockDto), HttpStatus.OK);
    }

    @RequestMapping(value = "insertBadBlock", method = RequestMethod.POST)
    public void insertBadBlock(@RequestBody BadBlockDto badBlockDto) {
        badBlockService.insertBadBlock(badBlockDto);
    }

}
