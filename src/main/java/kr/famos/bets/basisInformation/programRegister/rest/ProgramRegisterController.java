package kr.famos.bets.basisInformation.programRegister.rest;


import kr.famos.bets.basisInformation.programRegister.dto.ProgramRegisterDto;
import kr.famos.bets.basisInformation.programRegister.service.ProrgamRegisterService;
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
public class ProgramRegisterController {
    private static final Logger logger = LoggerFactory.getLogger(ProgramRegisterController.class);

    private final ProrgamRegisterService prorgamRegisterService;

    @Autowired
    public ProgramRegisterController(ProrgamRegisterService prorgamRegisterService) {
        this.prorgamRegisterService = prorgamRegisterService;
    }


    @RequestMapping(value = "/retrieveProgramRegister", method = RequestMethod.POST)
    public ResponseEntity<List<ProgramRegisterDto>> retrieveProgramRegister(@RequestBody ProgramRegisterDto programRegisterDto) {

        logger.debug("ProgramRegisterController -  retrieveProgramRegister 메소드");
        logger.debug("Tester Model" + programRegisterDto.getTesterModel());

        return new ResponseEntity<List<ProgramRegisterDto>>(prorgamRegisterService.retrieveProgramRegister(programRegisterDto), HttpStatus.OK);
    }


    @RequestMapping(value = "/insertProgramRegister", method = RequestMethod.POST)
    public void post(@RequestBody ProgramRegisterDto programRegisterDto) {
        logger.debug("ProgramRegisterController save 함수");

        logger.debug(programRegisterDto.getPartNumber());
        logger.debug(programRegisterDto.getProcessCode());
        logger.debug(programRegisterDto.getTesterModel());

        prorgamRegisterService.insertProgramRegister(programRegisterDto);


    }

}
