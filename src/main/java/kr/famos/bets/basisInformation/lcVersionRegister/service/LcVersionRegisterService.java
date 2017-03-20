package kr.famos.bets.basisInformation.lcVersionRegister.service;

import kr.famos.bets.basisInformation.lcVersionRegister.dto.LcVersionRegisterDto;
import kr.famos.bets.basisInformation.lcVersionRegister.mapper.LcVersionRegisterMapper;
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
public class LcVersionRegisterService {
    private static final Logger logger = LoggerFactory.getLogger(LcVersionRegisterService.class);

    @Autowired
    LcVersionRegisterMapper lcVersionRegisterMapper;


    public void insertLcVersionRegister(LcVersionRegisterDto lcVersionRegisterDto){

        //시스템 시간을 구해서 createDate에 넣는다.
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyyMMddHHmmss");
        String strDate = dayTime.format(new Date(time));

        lcVersionRegisterDto.setCreateDate(strDate);

        lcVersionRegisterMapper.insertLcVersionRegister(lcVersionRegisterDto);
    }

}
