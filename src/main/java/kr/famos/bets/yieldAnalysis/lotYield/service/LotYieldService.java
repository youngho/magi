package kr.famos.bets.yieldAnalysis.lotYield.service;

import kr.famos.bets.yieldAnalysis.lotYield.dto.LotYieldResultDto;
import kr.famos.bets.yieldAnalysis.lotYield.dto.LotYieldRetrieveCondDto;
import kr.famos.bets.yieldAnalysis.lotYield.mapper.LotYieldMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Service
public class LotYieldService {
    private static final Logger logger = LoggerFactory.getLogger(LotYieldService.class);

    @Autowired
    LotYieldMapper lotYieldMapper;

    public List<LotYieldResultDto> retrieveLotYield(LotYieldRetrieveCondDto lotYieldDto){
        List<LotYieldResultDto> programRegisterDtoList = lotYieldMapper.retrieveLotYield(lotYieldDto);
        return programRegisterDtoList;
    }
}
