package kr.famos.bets.history.testProgramRevision.service;

import kr.famos.bets.history.testProgramRevision.dto.ProgramRevisionDto;
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

    public List<ProgramRevisionDto> retrieveProgramRevision(ProgramRevisionDto programRevisionDto){

        return programRevisionMapper.retrieveProgramRevision(programRevisionDto);
    };
}
