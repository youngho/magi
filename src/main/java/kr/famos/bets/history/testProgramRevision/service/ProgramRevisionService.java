package kr.famos.bets.history.testProgramRevision.service;

import kr.famos.bets.history.testProgramRevision.dto.ProgramRevisionResultDto;
import kr.famos.bets.history.testProgramRevision.dto.ProgramRevisionRetrieveCondDto;
import kr.famos.bets.history.testProgramRevision.mapper.ProgramRevisionMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Service
public class ProgramRevisionService {
    private static final Logger logger = LoggerFactory.getLogger(ProgramRevisionService.class);

    @Autowired
    ProgramRevisionMapper programRevisionMapper;

    public List<ProgramRevisionResultDto> retrieveProgramRevision(ProgramRevisionRetrieveCondDto programRevisionRetrieveCondDto){

        return programRevisionMapper.retrieveProgramRevision(programRevisionRetrieveCondDto);
    };
}
