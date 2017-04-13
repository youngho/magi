package kr.famos.bets.history.testProgramRevision.rest;

import kr.famos.bets.history.testProgramRevision.dto.ProgramRevisionResultDto;
import kr.famos.bets.history.testProgramRevision.dto.ProgramRevisionRetrieveCondDto;
import kr.famos.bets.history.testProgramRevision.service.ProgramRevisionService;
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
public class ProgramRevisionController {
    private static final Logger logger = LoggerFactory.getLogger(ProgramRevisionController.class);

    @Autowired
    ProgramRevisionService programRevisionService;

    @RequestMapping(value = "/retrieveProgramRevision", method = RequestMethod.POST)
    public ResponseEntity<List<ProgramRevisionResultDto>> retrieveProgramRevision(@RequestBody ProgramRevisionRetrieveCondDto programRevisionRetrieveCondDto){

        return new ResponseEntity<List<ProgramRevisionResultDto>>(programRevisionService.retrieveProgramRevision(programRevisionRetrieveCondDto), HttpStatus.OK);
    }

}
