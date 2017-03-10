package kr.famos.bets.basisInformation.tdbiBoardTypeRegister.service;

import kr.famos.bets.basisInformation.tdbiBoardTypeRegister.dto.TdbiBoardTypeDto;
import kr.famos.bets.basisInformation.tdbiBoardTypeRegister.mapper.TdbiBoardTypeMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Service
public class TdbiBoardTypeService {

    private static final Logger logger = LoggerFactory.getLogger(TdbiBoardTypeService.class);

    @Autowired
    TdbiBoardTypeMapper tdbiBoardTypeMapper;

    public List<TdbiBoardTypeDto> retrieveTdbiBoardType(TdbiBoardTypeDto tdbiBoardTypeDto) {
        List<TdbiBoardTypeDto> tdbiBoardTypeDtoList = tdbiBoardTypeMapper.retrieveTdbiBoardType(tdbiBoardTypeDto);
        return tdbiBoardTypeDtoList;
    }

    public TdbiBoardTypeDto retrieveTdbiBoardTypeByKey(TdbiBoardTypeDto tdbiBoardTypeDto) {
        TdbiBoardTypeDto result = tdbiBoardTypeMapper.retrieveTdbiBoardTypeByKey(tdbiBoardTypeDto);
        return result;
    }

    public void insertTdbiBoardType(TdbiBoardTypeDto tdbiBoardTypeDto) {
        tdbiBoardTypeMapper.insertTdbiBoardType(tdbiBoardTypeDto);
    }
}
