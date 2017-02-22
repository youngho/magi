package kr.famos.bets.web;


import kr.famos.bets.dao.ProgramRegisterDao;
import kr.famos.bets.domain.ProgramRegister;
import kr.famos.com.domain.BizResult;
import kr.famos.com.web.ComAuthorityController;
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
    private static final Logger logger = LoggerFactory.getLogger(ComAuthorityController.class);

    @Autowired
    private ProgramRegisterDao programRegisterDao;
    private BizResult bizResult;


    @RequestMapping(value = "/retrieveProgramRegister", method = RequestMethod.POST)
    public ResponseEntity<List<ProgramRegister>> retrieveProgramRegister(@RequestBody ProgramRegister programRegister) {

        logger.debug("ProgramRegisterController -  retrieveProgramRegister 메소드");
        logger.debug("Tester Model" + programRegister.getTesterModel());

        return new ResponseEntity<List<ProgramRegister>>(programRegisterDao.retrieveProgramRegister(programRegister), HttpStatus.OK);
    }


    @RequestMapping(value = "/insertProgramRegister", method = RequestMethod.POST)
    public void post(@RequestBody ProgramRegister programRegister) {
        logger.debug("ProgramRegisterController save 함수");

        logger.debug(programRegister.getPartNumber());
        logger.debug(programRegister.getProcessCode());
        logger.debug(programRegister.getTesterModel());

        programRegisterDao.insertProgramRegister(programRegister);


    }

}
