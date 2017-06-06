package kr.famos.bets.basisInformation.testerIp.service;

import kr.famos.bets.basisInformation.testerIp.dto.TesterIpDto;
import kr.famos.bets.basisInformation.testerIp.mapper.TesterIpMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Service
public class TesterIpService {

    private static final Logger logger = LoggerFactory.getLogger(TesterIpService.class);

    private final TesterIpMapper testerIpMapper;

    @Autowired
    public TesterIpService(TesterIpMapper testerIpMapper) {
        this.testerIpMapper = testerIpMapper;
    }


    public List<TesterIpDto> retrieveTesterIp(TesterIpDto testerIpDto){
        List<TesterIpDto> testerIpDtoList = testerIpMapper.retrieveTesterIp(testerIpDto);
        return testerIpDtoList;
    }
    public TesterIpDto retrieveTesterIpByKey(TesterIpDto testerIpDto){
        TesterIpDto binDescriptionByKey = testerIpMapper.retrieveTesterIpByKey(testerIpDto);
        return binDescriptionByKey;
    }

    public void insertBadBlock(TesterIpDto testerIpDto){
        testerIpMapper.insertBadBlock(testerIpDto);
    }
}