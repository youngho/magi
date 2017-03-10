package kr.famos.bets.basisInformation.binDescription.rest;

import kr.famos.bets.basisInformation.binDescription.dto.BinDescriptionDto;
import kr.famos.bets.basisInformation.binDescription.service.BinDescriptionService;
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
 * Created by yhkim on 2017-02-21.
 */
@RestController
public class BinDescriptionController {
    private static final Logger logger = LoggerFactory.getLogger(BinDescriptionController.class);

    @Autowired
    private BinDescriptionService binDescriptionService;

    @RequestMapping(value = "/retrieveBinDescription", method = RequestMethod.POST)
    public ResponseEntity<List<BinDescriptionDto>> retrieveBinDescription(@RequestBody BinDescriptionDto binDescriptionDto) {

        logger.debug("BinDescriptionController - retireve 메소드");

        return new ResponseEntity<List<BinDescriptionDto>>(binDescriptionService.retrieveBinDescription(binDescriptionDto), HttpStatus.OK);
    }

    @RequestMapping(value = "/retrieveBinDescriptionByKey", method = RequestMethod.POST)
    public ResponseEntity<BinDescriptionDto> retrieveBinDescriptionByKey(@RequestBody BinDescriptionDto binDescriptionDto) {

        logger.debug("BinDescriptionController - retireve 메소드");

        return new ResponseEntity<BinDescriptionDto>(binDescriptionService.retrieveBinDescriptionByKey(binDescriptionDto), HttpStatus.OK);
    }


    @RequestMapping(value = "/insertBinDescription", method = RequestMethod.POST)
    public void post(@RequestBody BinDescriptionDto binDescriptionDto) {
        logger.debug("BinDescriptionController - post 함수");

        logger.debug(binDescriptionDto.getPartNumber());
        logger.debug(binDescriptionDto.getMainProgramName());
        logger.debug(binDescriptionDto.getProcessCode());
        logger.debug(binDescriptionDto.getTesterModel());

        binDescriptionService.insertBinDescription(binDescriptionDto);
    }
}
