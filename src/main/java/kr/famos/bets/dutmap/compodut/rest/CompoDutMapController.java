package kr.famos.bets.dutmap.compodut.rest;

import kr.famos.bets.dutmap.compodut.dto.CompoDutMapDto;
import kr.famos.bets.dutmap.compodut.dto.CompoDutMapResultDto;
import kr.famos.bets.dutmap.compodut.service.CompoDutMapService;
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
 * Created by yhkim on 2017-03-10.
 */
@RestController
public class CompoDutMapController {
    private static final Logger logger = LoggerFactory.getLogger(CompoDutMapController.class);

    @Autowired
    private CompoDutMapService compoDutMapService;

    @RequestMapping(value = "/retrieveCompoDutMap", method = RequestMethod.POST)
    public String retrieveCompoDutMap(@RequestBody CompoDutMapDto compoDutMapDto) {
        logger.debug("CompoDutMapController - retrieveCompoDutMap 메소드");
        String list = compoDutMapService.retrieveCompoDutMap(compoDutMapDto);
        return list;
    }
}
