package kr.famos.bets.basisInformation.lcVersionRegister.rest;


import kr.famos.bets.basisInformation.lcVersionRegister.dto.LcVersionRegisterDto;
import kr.famos.bets.basisInformation.lcVersionRegister.service.LcVersionRegisterService;
import kr.famos.bets.basisInformation.programRegister.dto.ProgramRegisterDto;
import kr.famos.bets.basisInformation.programRegister.service.ProrgamRegisterService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yhkim on 2017-02-21.
 */
@RestController
public class LcVersionRegisterController {
    private static final Logger logger = LoggerFactory.getLogger(LcVersionRegisterController.class);

    private final LcVersionRegisterService lcVersionRegisterService;

    @Autowired
    public LcVersionRegisterController(LcVersionRegisterService lcVersionRegisterService) {
        this.lcVersionRegisterService = lcVersionRegisterService;
    }


/*
    @RequestMapping(value = "/retrieveProgramRegister", method = RequestMethod.POST)
    public ResponseEntity<List<ProgramRegisterDto>> retrieveProgramRegister(@RequestBody ProgramRegisterDto programRegisterDto) {

        logger.debug("ProgramRegisterController -  retrieveProgramRegister 메소드");
        logger.debug("Tester Model" + programRegisterDto.getTesterModel());

        return new ResponseEntity<List<ProgramRegisterDto>>(prorgamRegisterService.retrieveProgramRegister(programRegisterDto), HttpStatus.OK);
    }

    @RequestMapping(value = "/retrieveProgramRegisterByKey", method = RequestMethod.POST)
    public ResponseEntity<ProgramRegisterDto> retrieveProgramRegisterByKey(@RequestBody ProgramRegisterDto programRegisterDto) {

        logger.debug("ProgramRegisterController -  retrieveProgramRegisterByKey 메소드");
        logger.debug("Tester Model" + programRegisterDto.getTesterModel());

        return new ResponseEntity<ProgramRegisterDto>(prorgamRegisterService.retrieveProgramRegisterByKey(programRegisterDto), HttpStatus.OK);
    }
*/


    @RequestMapping(value = "/insertLcVersionRegister", method = RequestMethod.POST)
    public void insertLcVersionRegister(@RequestBody LcVersionRegisterDto lcVersionRegisterDto) {
        logger.debug("ProgramRegisterController save 함수");

        logger.debug(lcVersionRegisterDto.getTesterModel());
        logger.debug(lcVersionRegisterDto.getLcVersion());
        logger.debug(lcVersionRegisterDto.getChangeWhy());

        lcVersionRegisterService.insertLcVersionRegister(lcVersionRegisterDto);


    }

}
