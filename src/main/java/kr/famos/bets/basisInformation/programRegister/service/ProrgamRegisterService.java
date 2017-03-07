package kr.famos.bets.basisInformation.programRegister.service;

import kr.famos.bets.basisInformation.programRegister.dto.ProgramRegisterDto;
import kr.famos.bets.basisInformation.programRegister.mapper.ProgramRegisterMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
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

    public ProgramRegisterDto retrieveProgramRegisterByKey(ProgramRegisterDto programRegisterDto){
        ProgramRegisterDto programRegisterDto2 = programRegisterMapper.retrieveProgramRegisterByKey(programRegisterDto);
        return programRegisterDto2;
    }

    public void insertProgramRegister(ProgramRegisterDto programRegisterDto){

        //시스템 시간을 구해서 createDate에 넣는다.
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyyMMddHHmmss");
        String strDate = dayTime.format(new Date(time));

        programRegisterDto.setCreateDate(strDate);

        programRegisterMapper.insertProgramRegister(programRegisterDto);
    }

}
