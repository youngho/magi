package kr.famos.bets.basisInformation.programRegister.service;

import kr.famos.bets.basisInformation.programRegister.dto.ProgramRegisterDto;
import kr.famos.bets.basisInformation.programRegister.mapper.ProgramRegisterMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-02-28.
 */
@Service
public class ProrgamRegisterService {
    private static final Logger logger = LoggerFactory.getLogger(ProrgamRegisterService.class);

    @Autowired
    ProgramRegisterMapper programRegisterMapper;

    public List<ProgramRegisterDto> retrieveProgramRegister(ProgramRegisterDto programRegisterDto){
        List<ProgramRegisterDto> programRegisterDtoList = programRegisterMapper.retrieveProgramRegister(programRegisterDto);
        return programRegisterDtoList;
    }

    public void insertProgramRegister(ProgramRegisterDto programRegisterDto){
        programRegisterMapper.insertProgramRegister(programRegisterDto);
    }

}
