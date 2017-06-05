package kr.famos.bets.basisInformation.testerIp.rest;

import kr.famos.bets.basisInformation.testerIp.dto.TesterIpDto;
import kr.famos.bets.basisInformation.testerIp.service.TesterIpService;
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
public class TesterIpController {
    private static final Logger logger = LoggerFactory.getLogger(TesterIpController.class);

    @Autowired
    private TesterIpService testerIpService;

    @RequestMapping(value = "/retrieveTesterIp", method = RequestMethod.POST)
    public ResponseEntity<List<TesterIpDto>> retrieveTesterIp(@RequestBody TesterIpDto testerIpDto) {
        return new ResponseEntity<List<TesterIpDto>>(testerIpService.retrieveTesterIp(testerIpDto), HttpStatus.OK);
    }
/*
    @RequestMapping(value = "/retrieveBinDescriptionByKey", method = RequestMethod.POST)
    public ResponseEntity<TesterIpDto> retrieveBinDescriptionByKey(@RequestBody TesterIpDto testerIpDto) {

        logger.debug("BinDescriptionController - retireve 메소드");

        return new ResponseEntity<TesterIpDto>(testerIpService.retrieveBinDescriptionByKey(testerIpDto), HttpStatus.OK);
    }


    @RequestMapping(value = "/insertBinDescription", method = RequestMethod.POST)
    public void post(@RequestBody TesterIpDto testerIpDto) {
        logger.debug("BinDescriptionController - post 함수");

        logger.debug(testerIpDto.getPartNumber());
        logger.debug(testerIpDto.getMainProgramName());
        logger.debug(testerIpDto.getProcessCode());
        logger.debug(testerIpDto.getTesterModel());

        testerIpService.insertBinDescription(testerIpDto);
    }
*/
}
